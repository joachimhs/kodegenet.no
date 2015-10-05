package no.kodegenet.handlers;

import com.google.gson.Gson;
import com.stripe.model.Charge;
import com.stripe.model.Token;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.QueryStringDecoder;
import no.haagensoftware.contentice.handler.ContenticeHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

/**
 * Created by jhsmbp on 12/02/15.
 */
public class StripeTokenHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(StripeTokenHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String messageContent = getHttpMessageContent(fullHttpRequest);

        logger.info("Stripe Token Handler");

        Map<String, Object> tokenParams = new HashMap<String, Object>();

        Token token = Token.create(tokenParams);

        logger.info(new Gson().toJson(token));

        writeContentsToBuffer(channelHandlerContext, new Gson().toJson(token).toString(), "application/json");
    }
}
