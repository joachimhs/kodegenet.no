package no.kodegenet.handlers;

import com.google.gson.Gson;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.conticious.stormpath.ConticiousStormpath;
import no.haagensoftware.conticious.stormpath.data.StormpathAccount;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.email.EpostExecutor;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.handlers.data.LoginData;
import no.kodegenet.plugin.dao.KodegenetOrderDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetUserHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        EpostExecutor.getInstance(getDomain().getWebappName()).sendRemainingEmails(getStorage());

        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        String returnMessage = "";

        if (uuidToken != null && uuidToken.length() > 10) {
            KodegenetSession session = KodegenetUserDao.getSession(getStorage(), getDomain().getWebappName(), uuidToken);

            if (session != null && session.getUser() != null) {
                KodegenetUser user = KodegenetUserDao.getUser(getStorage(), getDomain().getWebappName(), session.getUser());

                if (user != null && user.getId() != null) {
                    for (KodegenetOrder order : user.getOrders()) {
                        order.setOrderLines(KodegenetOrderDao.getKodegenetOrderLines(getStorage(), getDomain().getWebappName(), order.getId()));
                    }

                    RestSerializer serializer = new RestSerializer();
                    returnMessage = serializer.serialize(user).toString();
                }
            }
        }

        writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
    }
}
