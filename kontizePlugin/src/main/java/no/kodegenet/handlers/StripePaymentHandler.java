package no.kodegenet.handlers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import com.stripe.Stripe;
import com.stripe.exception.CardException;
import com.stripe.model.Charge;
import com.stripe.model.Subscription;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.util.DoubleParser;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.haagensoftware.conticious.stormpath.ConticiousStormpath;
import no.haagensoftware.conticious.stormpath.data.StormpathAccount;
import no.kodegenet.handlers.data.*;
import no.kodegenet.plugin.BringProduct;
import no.kodegenet.plugin.EmailTemplatePlugin;
import no.kodegenet.plugin.dao.KodegenetCartDao;
import no.kodegenet.plugin.dao.KodegenetOrderDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Logger;

/**
 * Created by jhsmbp on 12/02/15.
 */
public class StripePaymentHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(StripePaymentHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        Stripe.apiKey = System.getProperty("no.kodegenet.stripeKey");

        String messageContent = getHttpMessageContent(fullHttpRequest);

        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        if (uuidToken != null) {
            KodegenetUser user = KodegenetUserDao.getUserByUuid(getStorage(), getDomain().getWebappName(), uuidToken);

            logger.info("Stripe Payment payload:");
            logger.info(messageContent);

            StripeToken token = new Gson().fromJson(messageContent, StripeToken.class);

            logger.info("stripeToken:" + token.getStripeToken
                    ());
            logger.info("stripeTokenType:" + token.getStripeTokenString());
            logger.info("stripeEmail:" + token.getStripeEmail());

            //Get shopping cart
            SubCategoryData cartSD = getStorage().getSubCategory(getDomain().getWebappName(), "shoppingCarts", uuidToken);
            KodegenetShoppingCart cart = KodegenetCartDao.convertSubCategoryToShoppingCart(cartSD, uuidToken, getStorage(), getDomain().getWebappName());

            String stripeMessage = "";

            if (cart != null) {
                cart.setStripeEmail(token.getStripeEmail());
                cart.setStripeToken(token.getStripeToken());
                cart.setStripeTokenType(token.getStripeTokenString());
                Double subtotal = 0.0d;
                for (CartProduct cp : cart.getCartProducts()) {
                    subtotal += cp.getTotalAmount();
                }

                if (cart.getShippingType() != null && cart.getShippingType().equalsIgnoreCase("servicepakke")) {
                    BringProduct bringProduct = KodegenetCartDao.getShippingPrice(cart, cart.getId(), cart.getPostalCode());

                    cart.setShippingCost(DoubleParser.parseDoubleFromString(bringProduct.getPrice().getPackagePriceWithAdditionalServices().getAmountWithVAT(), 0d));
                } else if (cart.getShippingType() != null && cart.getShippingType().equalsIgnoreCase("fixedCost")) {
                    Integer shippingPrice = 0;
                    for (CartProduct cp : cart.getCartProducts()) {
                        if (cp.getFixedShippingCost() != null) {
                            shippingPrice += cp.getFixedShippingCost() * cp.getOrderedProductNumber();
                        } else {
                            shippingPrice += 95 * cp.getOrderedProductNumber();
                        }
                    }

                    cart.setFixedShippingCost(shippingPrice.doubleValue());
                    cart.setShippingCost(cart.getFixedShippingCost());
                } else {
                    cart.setShippingCost(0d);
                }

                //Charge user
                Map<String, Object> chargeParams = new HashMap<String, Object>();
                chargeParams.put("amount", (subtotal.intValue() * 100) + (cart.getShippingCost().intValue() * 100));
                chargeParams.put("currency", "nok");
                chargeParams.put("source", token.getStripeToken()); // obtained with Stripe.js
                chargeParams.put("description", "Kodegenet ordre for " + token.getStripeEmail());

                JsonObject purchaseComplete = new JsonObject();

                boolean paymentSuccessful = false;

                try {
                    Charge charge = Charge.create(chargeParams);

                    stripeMessage = new Gson().toJson(charge);
                    //TODO: Handle payment not successful
                    paymentSuccessful = charge.getPaid().booleanValue();
                } catch (CardException cardExeption) {
                    cardExeption.printStackTrace();
                    stripeMessage = "Payment failed: " + cardExeption.getMessage();
                    paymentSuccessful = false;
                }

                logger.info("*********\nSTRIPE MESSAGE: paymentSuccess: " + paymentSuccessful);
                logger.info(stripeMessage);

                if (paymentSuccessful) {
                    try {
                        createAccountIfRequired(cart);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }

                    //move cart to order
                    KodegenetOrder order = convertCartToOrder(cart);

                    SubCategoryData orderSD = SubCategoryUtil.convertObjectToSubCateogory(order);
                    getStorage().setSubCategory(getDomain().getWebappName(), "orders", order.getId(), orderSD);

                    for (KodegenetOrderLine ol : order.getOrderLines()) {
                        SubCategoryData olSD = SubCategoryUtil.convertObjectToSubCateogory(ol);
                        getStorage().setSubCategory(getDomain().getWebappName(), "orderLines", ol.getId(), olSD);

                        //Reduce the number of items in stock
                        SubCategoryData productSd = getStorage().getSubCategory(getDomain().getWebappName(), "products", ol.getProduct());
                        Integer quantity = productSd.getIntegerValueForKey("quantity");
                        Integer ordered = ol.getOrderedProductNumber();

                        if (quantity == null || ordered == null) {
                            quantity = 0;
                        } else {
                            quantity = quantity.intValue() - ordered.intValue();
                        }

                        productSd.getKeyMap().put("quantity", new JsonPrimitive(quantity));

                        getStorage().setSubCategory(
                                getDomain().getWebappName(),
                                "products",
                                productSd.getId(),
                                productSd);
                    }

                    if (user == null) {
                        user = KodegenetUserDao.getUser(getStorage(), getDomain().getWebappName(), cart.getEmailAddress());
                    }

                    if (user == null && cart.getCreateAccount() != null && cart.getCreateAccount().booleanValue()) {
                        //Create user
                        user = new KodegenetUser();
                        user.setId(cart.getEmailAddress());
                        user.setAddress(cart.getAddress());
                        user.setCity(cart.getCity());
                        user.setEmail(cart.getEmailAddress());
                        user.setGivenName(cart.getGivenName());
                        user.setSurname(cart.getSurname());
                        user.setPostalCode(cart.getPostalCode());
                    }

                    if (user != null) {
                        //If user has an account add the order to it
                        user.getOrders().add(order);
                        KodegenetUserDao.persistUser(getStorage(), getDomain().getWebappName(), user);
                    }

                    //TODO: Verify that order have been stored successfully
                    getStorage().deleteSubcategory(getDomain().getWebappName(), "shoppingCarts", cart.getId());
                    for (CartProduct cp : cart.getCartProducts()) {
                        getStorage().deleteSubcategory(getDomain().getWebappName(), "cartProducts", cp.getId());
                    }

                    purchaseComplete.addProperty("status", "success");
                    purchaseComplete.addProperty("orderId", orderSD.getId());

                    KodegenetOrderDao.generateOrderEmail(getStorage(), getDomain().getWebappName(), order);
                } else {
                    purchaseComplete.addProperty("status", "failed");
                }

                writeContentsToBuffer(channelHandlerContext, purchaseComplete.toString(), "application/json");
            }
        } else {
            sendError(channelHandlerContext, HttpResponseStatus.NO_CONTENT);
        }

    }

    private void createAccountIfRequired(KodegenetShoppingCart cart) {
        if (cart.getCreateAccount() != null && cart.getCreateAccount().booleanValue()) {
            ConticiousStormpath stormpath = ConticiousStormpath.getInstance("Kodegenet");

            if (!stormpath.usernameTaken(cart.getEmailAddress())) {
                StormpathAccount newAccount = new StormpathAccount();
                newAccount.setEmail(cart.getEmailAddress());
                newAccount.setUsername(cart.getEmailAddress());
                newAccount.setGivenName(cart.getGivenName());
                newAccount.setSurname(cart.getSurname());
                newAccount.setPassword(UUID.randomUUID().toString());
                newAccount.setStatus("ENABLED");

                stormpath.createUser(newAccount);
            }

            stormpath.resetPassword(cart.getEmailAddress());
        }
    }

     private KodegenetOrder convertCartToOrder(KodegenetShoppingCart cart) {
        KodegenetOrder order = new KodegenetOrder();
        order.setId(UUID.randomUUID().toString());
        order.setStatus("paid");
        order.setSession(cart.getSession());
        order.setStripeTokenType(cart.getStripeTokenType());
        order.setStripeToken(cart.getStripeToken());
        order.setStripeEmail(cart.getStripeEmail());

        order.setCreateAccount(cart.getCreateAccount());
        order.setAddress(cart.getAddress());
        order.setCity(cart.getCity());
        order.setPostalCode(cart.getPostalCode());
        order.setEmailAddress(cart.getEmailAddress());
        order.setSurname(cart.getSurname());
        order.setGivenName(cart.getGivenName());

        order.setDiscountAmount(cart.getDiscountAmount());
        order.setDiscountPercentage(cart.getDiscountPercentage());
        order.setCreatedDate(System.currentTimeMillis());
        order.setPaymentDate(System.currentTimeMillis());

         order.setShippingType(cart.getShippingType());
         order.setShippingCost(cart.getShippingCost());

        for (CartProduct cp : cart.getCartProducts()) {
            KodegenetOrderLine ol = new KodegenetOrderLine();
            ol.setId(cp.getId());
            ol.setDiscountAmount(cp.getDiscountAmount());
            ol.setTotalAmount(cp.getTotalAmount());
            ol.setOrderedProductNumber(cp.getOrderedProductNumber());
            ol.setProduct(cp.getProduct());

            order.getOrderLines().add(ol);
        }

        return order;
    }
}
