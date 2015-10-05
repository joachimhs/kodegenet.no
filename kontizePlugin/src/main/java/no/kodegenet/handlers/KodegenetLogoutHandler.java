package no.kodegenet.handlers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.conticious.stormpath.ConticiousStormpath;
import no.haagensoftware.conticious.stormpath.data.StormpathAccount;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.handlers.data.LoginData;
import no.kodegenet.plugin.dao.KodegenetUserDao;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetLogoutHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        if (uuidToken != null) {
            KodegenetSession session = KodegenetUserDao.getSession(getStorage(), getDomain().getWebappName(), uuidToken);
            session.setAuthenticated(false);
            KodegenetUserDao.persistSession(getStorage(), getDomain().getWebappName(), session);

        }

        writeOKToBuffer(channelHandlerContext);
    }
}
