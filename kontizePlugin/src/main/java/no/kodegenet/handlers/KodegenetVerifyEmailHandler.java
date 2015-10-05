package no.kodegenet.handlers;

import com.google.gson.JsonObject;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.conticious.stormpath.ConticiousStormpath;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetVerifyEmailHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String spToken = getParameter("sptoken");

        boolean verified = ConticiousStormpath.getInstance("Kodegenet").verifyEmail(spToken);

        JsonObject retJson = new JsonObject();
        retJson.addProperty("verified", verified);

        writeContentsToBuffer(channelHandlerContext, retJson.toString(), "application/json");
    }
}
