package no.kodegenet.handlers;

import com.google.gson.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.contentice.util.DoubleParser;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.*;
import no.kodegenet.plugin.BringProduct;
import no.kodegenet.plugin.dao.KodegenetCartDao;
import org.apache.log4j.Logger;

/**
 * Created by jhsmbp on 12/03/15.
 */
public class CartHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(CartHandler.class.getName());
    private static List<String> cartSideloadKeys = Arrays.asList("cartProduct");
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuid = getCookieValue(fullHttpRequest, "uuid");
        String cartId = getParameter("cartId");

        if (isGet(fullHttpRequest)) {
            if (uuid != null && cartId.equals(uuid)) {
                KodegenetShoppingCart cart = KodegenetCartDao.getCartFromUuid(getStorage(), getDomain().getWebappName(), uuid);

                Integer shippingPrice = 0;
                for (CartProduct cp : cart.getCartProducts()) {
                    if (cp.getFixedShippingCost() != null) {
                        shippingPrice += cp.getFixedShippingCost() * cp.getOrderedProductNumber();
                    } else {
                        shippingPrice += 95 * cp.getOrderedProductNumber();
                    }
                }

                cart.setFixedShippingCost(shippingPrice.doubleValue());

               if (cart != null) {
                    RestSerializer serializer = new RestSerializer();
                    String retVal = serializer.serialize(cart, cartSideloadKeys).toString();

                    writeContentsToBuffer(channelHandlerContext, retVal, "application/json");
                } else {

                    sendError(channelHandlerContext, HttpResponseStatus.NOT_FOUND);
                }
            } else {
                sendError(channelHandlerContext, HttpResponseStatus.NOT_FOUND);
            }
        } else if(isPut(fullHttpRequest)) {
            logger.info("Cart Post!");
            String messageContent = getHttpMessageContent(fullHttpRequest);
            logger.info(messageContent);


            KodegenetShoppingCartObject cartObjectFromClient = new Gson().fromJson(messageContent, KodegenetShoppingCartObject.class);
            InputKodegenetShoppingCart cartFromClient = cartObjectFromClient.getShoppingCart();
            KodegenetShoppingCart cart = KodegenetCartDao.getCartFromUuid(getStorage(), getDomain().getWebappName(), uuid);

            if (cart != null && cartFromClient != null) {
                cart.setEmailAddress(cartFromClient.getEmailAddress());
                cart.setAddress(cartFromClient.getAddress());
                cart.setGivenName(cartFromClient.getGivenName());
                cart.setSurname(cartFromClient.getSurname());
                cart.setPostalCode(cartFromClient.getPostalCode());
                cart.setCity(cartFromClient.getCity());
                cart.setCreateAccount(cartFromClient.getCreateAccount());
            } else {
                sendError(channelHandlerContext, HttpResponseStatus.NOT_FOUND);
            }

            if (cartFromClient.getShippingType() != null && cartFromClient.getShippingType().equalsIgnoreCase("servicepakke")) {
                BringProduct bringProduct = KodegenetCartDao.getShippingPrice(cart, uuid, cart.getPostalCode());

                cart.setShippingType("servicepakke");
                cart.setShippingCost(DoubleParser.parseDoubleFromString(bringProduct.getPrice().getPackagePriceWithAdditionalServices().getAmountWithVAT(), 0d));
            } else if (cartFromClient.getShippingType() != null && cartFromClient.getShippingType().equalsIgnoreCase("fixedCost")) {
                cart.setShippingType("fixedCost");
            } else {
                cart.setShippingCost(0d);
                cart.setShippingType("");
            }

            Integer shippingPrice = 0;
            for (CartProduct cp : cart.getCartProducts()) {
                if (cp.getFixedShippingCost() != null) {
                    shippingPrice += cp.getFixedShippingCost() * cp.getOrderedProductNumber();
                } else {
                    shippingPrice += 95 * cp.getOrderedProductNumber();
                }
            }

            cart.setFixedShippingCost(shippingPrice.doubleValue());

            SubCategoryData cartSubCategory = KodegenetCartDao.convertShoppingCartToSubcategory(cart);

            //extract cartProducts
            JsonArray cpArray = new JsonArray();
            for (String cp : cartFromClient.getCartProducts()) {
                cpArray.add(new JsonPrimitive(cp));
            }
            cartSubCategory.getKeyMap().put("cartProducts", cpArray);

            getStorage().setSubCategory(getDomain().getWebappName(), "shoppingCarts", cart.getId(), cartSubCategory);

            RestSerializer serializer = new RestSerializer();
            String retVal = serializer.serialize(cart).toString();

                writeContentsToBuffer(channelHandlerContext, retVal, "application/json");

        } else {
            sendError(channelHandlerContext, HttpResponseStatus.METHOD_NOT_ALLOWED);
        }
    }


}
