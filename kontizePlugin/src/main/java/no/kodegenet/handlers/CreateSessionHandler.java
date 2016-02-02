package no.kodegenet.handlers;

import com.google.gson.Gson;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializer;
import com.stripe.model.Charge;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.QueryStringDecoder;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.email.EpostExecutor;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.instagram.SessionCleanupPlugin;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Logger;

/**
 * Created by jhsmbp on 12/02/15.
 */
public class CreateSessionHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(CreateSessionHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        EpostExecutor.getInstance(getDomain().getWebappName()).sendRemainingEmails(getStorage());
        SessionCleanupPlugin.getInstance(getDomain().getWebappName(), getStorage());

        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        if (isPost(fullHttpRequest)) {
            if (uuidToken == null || uuidToken.length() < 30) {
                handlePost(channelHandlerContext);
            } else {
                handleRequestForExistingSession(channelHandlerContext, uuidToken);
            }
        } else if (isGet(fullHttpRequest) && uuidToken != null) {
            handleRequestForExistingSession(channelHandlerContext, uuidToken);

        } else {
            sendError(channelHandlerContext, HttpResponseStatus.METHOD_NOT_ALLOWED);
        }
    }

    private void handlePost(ChannelHandlerContext channelHandlerContext) {
        String uuidToken;
        uuidToken = UUID.randomUUID().toString();

        KodegenetSession kodegenetSession = createKodegenetSession(uuidToken);

        RestSerializer serializer = new RestSerializer();
        String retVal = serializer.serialize(kodegenetSession).toString();

        writeContentsToBuffer(channelHandlerContext, retVal, "application/json");
    }

    private void handleRequestForExistingSession(ChannelHandlerContext channelHandlerContext, String uuidToken) {

        KodegenetSession kodegenetSession = KodegenetUserDao.getSession(getStorage(), getDomain().getWebappName(), uuidToken);

        if (kodegenetSession != null && kodegenetSession.getUuid().equals(uuidToken)) {
            kodegenetSession.setCreated(new Date().getTime());
            kodegenetSession.setLastAccessed(new Date().getTime());
            KodegenetUserDao.persistSession(getStorage(), getDomain().getWebappName(), kodegenetSession);

            RestSerializer serializer = new RestSerializer();
            String retVal = serializer.serialize(kodegenetSession).toString();

            writeContentsToBuffer(channelHandlerContext, retVal, "application/json");
        } else {
            handlePost(channelHandlerContext);
        }
    }

    private KodegenetSession createKodegenetSession(String uuidToken) {
        KodegenetSession session = new KodegenetSession();
        session.setUuid(uuidToken);
        session.setCreated(new Date().getTime());
        session.setLastAccessed(new Date().getTime());
        session.setAuthenticated(false);

        KodegenetUserDao.persistSession(getStorage(), getDomain().getWebappName(), session);

        return session;
    }
}
