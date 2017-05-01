package no.kodegenet.handlers;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.plugin.dao.KodegenetOrderDao;

/**
 * Created by jhsmbp on 1/16/14.
 */
public class KodegenetOrderUpdateEmail extends ContenticeHandler {

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {

        String orderid = getParameter("orderId");

        if (orderid != null) {
            KodegenetOrder order = KodegenetOrderDao.getKodegentOrder(getStorage(), getDomain().getWebappName(), orderid);
            order.setOrderLines(KodegenetOrderDao.getKodegenetOrderLines(getStorage(), getDomain().getWebappName(), orderid));

            KodegenetOrderDao.generateOrderUpdateEmail(getStorage(), getDomain().getWebappName(), order);
        }

        writeContentsToBuffer(channelHandlerContext, "{\"status\": \"OK\"}", "application/json");
    }


}
