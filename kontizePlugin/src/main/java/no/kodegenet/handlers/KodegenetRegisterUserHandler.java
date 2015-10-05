package no.kodegenet.handlers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
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
public class KodegenetRegisterUserHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        ConticiousStormpath stormpath = ConticiousStormpath.getInstance("Kodegenet");

        String messageContent = getHttpMessageContent(fullHttpRequest);
        String uuidToken = getCookieValue(fullHttpRequest, "uuid");
        boolean authenticated = false;

        JsonObject jsonReturn = new JsonObject();

        if (isPost(fullHttpRequest) && messageContent != null) {
            KodegenetUser user = new Gson().fromJson(messageContent, KodegenetUser.class);

            boolean isNew = false;

            if (user != null) {

                if (!stormpath.usernameTaken(user.getId())) {
                    isNew = true;
                    StormpathAccount newAccount = new StormpathAccount();
                    newAccount.setEmail(user.getEmail());
                    newAccount.setUsername(user.getEmail());
                    newAccount.setGivenName(user.getGivenName());
                    newAccount.setSurname(user.getSurname());
                    newAccount.setPassword(UUID.randomUUID().toString());
                    newAccount.setStatus("ENABLED");

                    stormpath.createUser(newAccount);

                    KodegenetUserDao.persistUser(getStorage(), getDomain().getWebappName(), user);
                }

                jsonReturn.add("isNew", new JsonPrimitive(isNew));
                jsonReturn.add("success", new JsonPrimitive(true));

                stormpath.resetPassword(user.getId());
            }
        }

        writeContentsToBuffer(channelHandlerContext, jsonReturn.toString(), "application/json");
    }

    private void populateUserFromStormpath(KodegenetUser user, StormpathAccount spAccount) {
        user.setGivenName(spAccount.getGivenName());
        user.setSurname(spAccount.getSurname());
    }
}
