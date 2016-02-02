package no.kodegenet.handlers;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.util.IntegerParser;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.CartProduct;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetOrderLine;
import no.kodegenet.handlers.data.KodegenetShoppingCart;
import no.kodegenet.plugin.BringPackagePriceWithAdditionalServices;
import no.kodegenet.plugin.BringProduct;
import no.kodegenet.plugin.KodegenetBringPlugin;
import no.kodegenet.plugin.dao.KodegenetCartDao;
import no.kodegenet.plugin.dao.KodegenetOrderDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.List;

/**
 * Created by jhsmbp on 18/10/15.
 */
public class KodegenetShippingHandler extends ContenticeHandler {

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {

        String uuid = getCookieValue(fullHttpRequest, "uuid");
        String postalCodeQp = getParameter("postalCode");

        if (isGet(fullHttpRequest)) {
            KodegenetShoppingCart cart = KodegenetCartDao.getCartFromUuid(getStorage(), getDomain().getWebappName(), uuid);

            BringProduct bringProduct = KodegenetCartDao.getShippingPrice(cart, uuid, postalCodeQp);

            if (bringProduct != null) {
                BringPackagePriceWithAdditionalServices price = bringProduct.getPrice().getPackagePriceWithAdditionalServices();

                price.setId(cart.getId());
                price.setPackageType("Klimanøytral Servicepakke");

                RestSerializer serializer = new RestSerializer();
                String jsonReturn = serializer.serialize(price).toString();

                writeContentsToBuffer(channelHandlerContext, jsonReturn, "application/json");
            } else {
                sendError(channelHandlerContext, HttpResponseStatus.BAD_REQUEST);
            }
        }
    }
}
