package no.kodegenet.handlers;

import com.google.gson.*;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.CartProduct;
import no.kodegenet.handlers.data.CartProductObject;
import no.kodegenet.handlers.data.KodegenetShoppingCart;
import org.apache.log4j.Logger;

import java.util.List;
import java.util.UUID;

/**
 * Created by jhsmbp on 12/03/15.
 */
public class CartProductHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(CartProductHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuid = getCookieValue(fullHttpRequest, "uuid");
        String jsonResponse = "";

        List<String> ids = getQueryStringIds();
        String productId = getParameter("productId");

        if (isPost(fullHttpRequest)) {
            //new product
            String message = getHttpMessageContent(fullHttpRequest);
            logger.info(message);

            CartProductObject cpo = new Gson().fromJson(message, CartProductObject.class);
            if (cpo.getCartProduct() != null) {
                CartProduct cartProduct = cpo.getCartProduct();

                cartProduct.setId(UUID.randomUUID().toString());

                SubCategoryData productSD = getStorage().getSubCategory(getDomain().getWebappName(), "products", cartProduct.getProduct());
                if (productSD != null) {
                    Double price = productSD.getDoubleValueForKey("price");
                    cartProduct.setTotalAmount(price);
                    cartProduct.setOrderedProductNumber(1);
                }


                getStorage().setSubCategory(getDomain().getWebappName(), "cartProducts", cartProduct.getId(), convertCartProductToSubcategory(cartProduct));


                SubCategoryData cart = getStorage().getSubCategory(getDomain().getWebappName(), "shoppingCarts", uuid);
                if (cart != null) {
                    JsonElement cartProductElement = cart.getKeyMap().get("cartProducts");
                    if (cartProductElement == null) {
                        cartProductElement = new JsonArray();
                        cart.getKeyMap().put("cartProducts", cartProductElement);
                    }

                    if (cartProductElement.isJsonArray()) {
                        JsonArray cartProductArray = cartProductElement.getAsJsonArray();
                        cartProductArray.add(new JsonPrimitive(cartProduct.getId()));

                        getStorage().setSubCategory(getDomain().getWebappName(), "shoppingCarts", uuid, cart);
                    }
                }

                RestSerializer serializer = new RestSerializer();
                jsonResponse = serializer.serialize(cartProduct).toString();
            }

            writeContentsToBuffer(channelHandlerContext, jsonResponse, "application/json");
        } else if (isPut(fullHttpRequest) && productId != null) {
            //updated product
            String message = getHttpMessageContent(fullHttpRequest);
            logger.info(message);

            CartProductObject cpo = new Gson().fromJson(message, CartProductObject.class);
            cpo.getCartProduct().setId(productId);

            if (cpo.getCartProduct() != null) {
                CartProduct cartProduct = cpo.getCartProduct();

                SubCategoryData productSD = getStorage().getSubCategory(getDomain().getWebappName(), "products", cartProduct.getProduct());
                if (productSD != null) {
                    Double unitPrice = productSD.getDoubleValueForKey("price");
                    Integer orderNumber = cartProduct.getOrderedProductNumber();

                    cartProduct.setTotalAmount(unitPrice * orderNumber);
                }

                getStorage().setSubCategory(getDomain().getWebappName(), "cartProducts", cartProduct.getId(), convertCartProductToSubcategory(cartProduct));

                RestSerializer serializer = new RestSerializer();
                jsonResponse = serializer.serialize(cartProduct).toString();

                writeContentsToBuffer(channelHandlerContext, jsonResponse, "application/json");
            }
        } else {
            sendError(channelHandlerContext, HttpResponseStatus.METHOD_NOT_ALLOWED);
        }
    }

    private SubCategoryData convertCartProductToSubcategory(CartProduct cartProduct) {
        SubCategoryData sd = new SubCategoryData();
        sd.setId(cartProduct.getId());

        sd.getKeyMap().put("product", new JsonPrimitive(cartProduct.getProduct()));

        if (cartProduct.getOrderedProductNumber() != null) {
            sd.getKeyMap().put("orderedProductNumber", new JsonPrimitive(cartProduct.getOrderedProductNumber()));
        }

        if (cartProduct.getTotalAmount() != null) {
            sd.getKeyMap().put("totalAmount", new JsonPrimitive(cartProduct.getTotalAmount()));
        }

        if (cartProduct.getDiscountAmount() != null) {
            sd.getKeyMap().put("discountAmount", new JsonPrimitive(cartProduct.getDiscountAmount()));
        }

        return sd;
    }
}
