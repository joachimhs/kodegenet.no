package no.kodegenet.handlers;

import com.google.gson.JsonPrimitive;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.KodegenetSession;

import java.util.Date;
import java.util.UUID;
import java.util.logging.Logger;

/**
 * Created by jhsmbp on 12/02/15.
 */
public class AcceptCookiesHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(AcceptCookiesHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        if (isPost(fullHttpRequest)) {
            if (uuidToken != null || uuidToken.length() > 30) {
                handlePost(channelHandlerContext, uuidToken);
            }
        } else {
            sendError(channelHandlerContext, HttpResponseStatus.METHOD_NOT_ALLOWED);
        }
    }

    private void handlePost(ChannelHandlerContext channelHandlerContext, String uuidToken) {
        SubCategoryData sd = getStorage().getSubCategory(getDomain().getWebappName(), "sessions", uuidToken);

        if (sd != null) {
            sd.getKeyMap().put("acceptedCookies", new JsonPrimitive(true));

            getStorage().setSubCategory(getDomain().getWebappName(), "sessions", uuidToken, sd);

            KodegenetSession kodegenetSession = createKodegenetSession(sd);

            RestSerializer serializer = new RestSerializer();
            String retVal = serializer.serialize(kodegenetSession).toString();

            writeContentsToBuffer(channelHandlerContext, retVal, "application/json");
        }
    }

    private KodegenetSession createKodegenetSession(SubCategoryData sd) {
        KodegenetSession session = new KodegenetSession();
        session.setUuid(sd.getId());

        if (session.getUuid().startsWith("sessions_")) {
            session.setUuid(session.getUuid().substring(9));
        }

        session.setCreated(sd.getLongValueForKey("created"));
        session.setLastAccessed(new Date().getTime());
        session.setAuthenticated(sd.getBooleanValueForKey("authenticated"));
        session.setAcceptedCookies(sd.getBooleanValueForKey("acceptedCookies"));

        getStorage().setSubCategory(getDomain().getWebappName(), "sessions", session.getUuid(), convertSessionToSubCategory(session));

        return session;
    }

    private SubCategoryData convertSessionToSubCategory(KodegenetSession session) {
        SubCategoryData sd = new SubCategoryData();
        sd.setId(session.getUuid());
        sd.getKeyMap().put("created", new JsonPrimitive(session.getCreated()));
        sd.getKeyMap().put("lastUsed", new JsonPrimitive(session.getLastAccessed()));
        sd.getKeyMap().put("authenticated", new JsonPrimitive(session.isAuthenticated()));
        sd.getKeyMap().put("acceptedCookies", new JsonPrimitive(session.isAcceptedCookies()));

        return sd;
    }
}
