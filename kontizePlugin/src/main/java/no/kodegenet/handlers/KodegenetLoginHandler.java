package no.kodegenet.handlers;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.conticious.stormpath.ConticiousStormpath;
import no.haagensoftware.conticious.stormpath.data.StormpathAccount;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.handlers.data.LoginData;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.UUID;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetLoginHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        ConticiousStormpath stormpath = ConticiousStormpath.getInstance("Kodegenet");

        String messageContent = getHttpMessageContent(fullHttpRequest);
        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        if (uuidToken == null) {
            uuidToken = UUID.randomUUID().toString();
        }

        boolean authenticated = false;

        String returnMessage = "";

        if (messageContent != null && messageContent.startsWith("{") && messageContent.endsWith("}")) {
            LoginData ld = new Gson().fromJson(messageContent, LoginData.class);

            if (ld != null && stormpath != null) {

                StormpathAccount spAccount = stormpath.authenticateUser(ld.getUsername(), ld.getPassword());

                if (spAccount != null) {
                    authenticated = true;
                    KodegenetUser user = KodegenetUserDao.getUser(getStorage(), getDomain().getWebappName(), spAccount.getEmail());

                    if (user == null || user.getId() == null) {
                        //create
                        user = new KodegenetUser();
                        user.setId(spAccount.getEmail());
                        populateUserFromStormpath(user, spAccount);
                    } else {
                        //update
                        populateUserFromStormpath(user, spAccount);
                    }

                    KodegenetUserDao.persistUser(getStorage(), getDomain().getWebappName(), user);


                    KodegenetSession session = KodegenetUserDao.getSession(getStorage(), getDomain().getWebappName(), uuidToken);

                    if (session == null) {
                        //create new session
                        session = new KodegenetSession();
                        session.setUuid(uuidToken);
                        session.setAuthenticated(true);
                        session.setCreated(System.currentTimeMillis());
                        session.setLastAccessed(System.currentTimeMillis());
                        session.setUser(user.getId());

                        KodegenetUserDao.persistSession(getStorage(), getDomain().getWebappName(), session);
                    }

                    session.setUser(user.getId());
                    session.setAuthenticated(true);


                    KodegenetUserDao.persistSession(getStorage(), getDomain().getWebappName(), session);

                    RestSerializer serializer = new RestSerializer();

                    returnMessage = serializer.serialize(session).toString();
                }
            }
        }

        if (authenticated) {
            writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
        } else {
            sendError(channelHandlerContext, HttpResponseStatus.NOT_FOUND);
        }
    }

    private void populateUserFromStormpath(KodegenetUser user, StormpathAccount spAccount) {
        user.setGivenName(spAccount.getGivenName());
        user.setSurname(spAccount.getSurname());
    }
}
