package no.kodegenet.handlers;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.plugin.dao.KodegenetOrderDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.Arrays;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetOrderHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        String orderId = getParameter("orderId");

        String returnMessage = "";

        if (orderId != null) {
            KodegenetOrder order = KodegenetOrderDao.getKodegentOrder(getStorage(), getDomain().getWebappName(), orderId);

            if (order != null) {
                order.setOrderLines(KodegenetOrderDao.getKodegenetOrderLines(getStorage(), getDomain().getWebappName(), order.getId()));
                RestSerializer serializer = new RestSerializer();
                returnMessage = serializer.serialize(order, Arrays.asList("orderLine")).toString();
            }
        }

        writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
    }
}
