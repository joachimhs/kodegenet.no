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

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetOrderHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        String orderId = getParameter("orderId");

        String returnMessage = "";

        if (uuidToken != null && uuidToken.length() > 10 && orderId != null) {
            KodegenetSession session = KodegenetUserDao.getSession(getStorage(), getDomain().getWebappName(), uuidToken);

            if (session != null && session.getUser() != null && session.getUuid().equals(uuidToken) && session.isAuthenticated()) {
                KodegenetUser user = KodegenetUserDao.getUser(getStorage(), getDomain().getWebappName(), session.getUser());

                KodegenetOrder order = user.getOrder(orderId);

                if (order != null) {
                    order.setOrderLines(KodegenetOrderDao.getKodegenetOrderLines(getStorage(), getDomain().getWebappName(), order.getId()));
                    RestSerializer serializer = new RestSerializer();
                    returnMessage = serializer.serialize(order).toString();
                }
            }
        }

        writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
    }
}
