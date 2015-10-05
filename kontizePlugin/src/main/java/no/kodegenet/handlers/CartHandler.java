package no.kodegenet.handlers;

import com.google.gson.*;
import java.util.List;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.*;
import org.apache.log4j.Logger;

/**
 * Created by jhsmbp on 12/03/15.
 */
public class CartHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(CartHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuid = getCookieValue(fullHttpRequest, "uuid");
        String cartId = getParameter("cartId");

        if (isGet(fullHttpRequest)) {
            if (uuid != null && cartId.equals(uuid)) {
                KodegenetShoppingCart cart = getCartFromUuid(uuid);

               if (cart != null) {
                    RestSerializer serializer = new RestSerializer();
                    String retVal = serializer.serialize(cart).toString();

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
            KodegenetShoppingCart cart = getCartFromUuid(uuid);

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

            SubCategoryData cartSubCategory = convertShoppingCartToSubcategory(cart);

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

    private KodegenetShoppingCart getCartFromUuid(String uuid) {
        KodegenetShoppingCart cart = null;

        SubCategoryData session = getStorage().getSubCategory(getDomain().getWebappName(), "sessions", uuid);
        if (session != null) {
            SubCategoryData uuidCat = getStorage().getSubCategory(getDomain().getWebappName(), "shoppingCarts", uuid);
            if (uuidCat == null) {
                uuidCat = new SubCategoryData();
                uuidCat.setId(uuid);
                uuidCat.getKeyMap().put("status", new JsonPrimitive("new"));
                uuidCat.getKeyMap().put("session", new JsonPrimitive(uuid));

                getStorage().setSubCategory(getDomain().getWebappName(), "shoppingCarts", uuid, uuidCat);
            }

            cart = convertSubCategoryToShoppingCart(uuidCat, uuid, getStorage(), getDomain().getWebappName());
        }

        return cart;
    }

    public static KodegenetShoppingCart convertSubCategoryToShoppingCart(SubCategoryData sd, String session, StoragePlugin storage, String webappName) {
        KodegenetShoppingCart cart = new KodegenetShoppingCart();
        cart.setId(sd.getId());

        if (cart.getId().startsWith("shoppingCarts_")) {
            cart.setId(cart.getId().substring(14));
        }

        cart.setDiscountAmount(sd.getIntegerValueForKey("discountAmount"));
        cart.setDiscountPercentage(sd.getIntegerValueForKey("discountPercentage"));
        cart.setSession(session);
        cart.setStatus(sd.getValueForKey("status"));
        cart.setStripeEmail(sd.getValueForKey("stripeEmail"));
        cart.setStripeToken(sd.getValueForKey("stripeToken"));
        cart.setStripeTokenType(sd.getValueForKey("stripeTokenType"));

        cart.setCity(sd.getValueForKey("city"));
        cart.setAddress(sd.getValueForKey("address"));
        cart.setGivenName(sd.getValueForKey("givenName"));
        cart.setSurname(sd.getValueForKey("surname"));
        cart.setPostalCode(sd.getValueForKey("postalCode"));
        cart.setEmailAddress(sd.getValueForKey("emailAddress"));
        cart.setCreateAccount(sd.getBooleanValueForKey("createAccount"));

        List<String> cartProducts = sd.getListForKey("cartProducts");
        for (String cp : cartProducts) {
            SubCategoryData cpSd = storage.getSubCategory(webappName, "cartProducts", cp);
            cart.getCartProducts().add(convertSubCategoryToCartProduct(cpSd));
        }

        return cart;
    }

    private SubCategoryData convertShoppingCartToSubcategory(KodegenetShoppingCart cart) {
        SubCategoryData sd = new SubCategoryData();
        sd.setId(cart.getId());
        sd.getKeyMap().put("session", new JsonPrimitive(cart.getSession()));

        if (cart.getAddress() != null) {
            sd.getKeyMap().put("emailAddress", new JsonPrimitive(cart.getEmailAddress()));
        }

        if (cart.getGivenName() != null) {
            sd.getKeyMap().put("givenName", new JsonPrimitive(cart.getGivenName()));
        }

        if (cart.getSurname() != null) {
            sd.getKeyMap().put("surname", new JsonPrimitive(cart.getSurname()));
        }

        if (cart.getPostalCode() != null) {
            sd.getKeyMap().put("postalCode", new JsonPrimitive(cart.getPostalCode()));
        }

        if (cart.getCity() != null) {
            sd.getKeyMap().put("city", new JsonPrimitive(cart.getCity()));
        }

        if (cart.getAddress() != null) {
            sd.getKeyMap().put("address", new JsonPrimitive(cart.getAddress()));
        }

        if (cart.getStatus() != null) {
            sd.getKeyMap().put("status", new JsonPrimitive(cart.getStatus()));
        }

        if (cart.getCreateAccount() != null) {
            sd.getKeyMap().put("createAccount", new JsonPrimitive(cart.getCreateAccount()));
        }

        return sd;
    }

    public static CartProduct convertSubCategoryToCartProduct(SubCategoryData sd) {
        CartProduct cp = new CartProduct();
        cp.setId(sd.getId());

        if (cp.getId().startsWith("cartProducts_")) {
            cp.setId(cp.getId().substring(13));
        }

        cp.setOrderedProductNumber(sd.getIntegerValueForKey("orderedProductNumber"));
        cp.setTotalAmount(sd.getDoubleValueForKey("totalAmount"));
        cp.setDiscountAmount(sd.getDoubleValueForKey("discountAmount"));
        cp.setProduct(sd.getValueForKey("product"));

        return cp;
    }
}
