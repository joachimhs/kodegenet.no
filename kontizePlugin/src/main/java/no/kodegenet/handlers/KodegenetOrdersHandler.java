package no.kodegenet.handlers;

import com.google.gson.Gson;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.util.UUIDUtil;
import no.haagensoftware.conticious.plugin.nexmo.NexmoAlertService;
import no.haagensoftware.conticious.plugin.nexmo.data.NexmoRecipientData;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.*;
import no.kodegenet.plugin.dao.KodegenetOrderDao;
import no.kodegenet.plugin.dao.KodegenetSmsDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

/**
 * Created by jhsmbp on 08/10/16.
 */
public class KodegenetOrdersHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(KodegenetOrdersHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String returnMessage = "{ \"orders\": []}"; //default return message

        String uuidToken = getCookieValue(fullHttpRequest, "uuid");
        KodegenetUser user = KodegenetUserDao.getUserByUuid(getStorage(), getDomain().getWebappName(), uuidToken);
        if (user != null && user.getRole() != null && user.getRole().equals("admin")) {
            if (isGet(fullHttpRequest)) {
                List<KodegenetOrder> orders = KodegenetOrderDao.getKodegenetOrders(getStorage(), getDomain().getWebappName());

                RestSerializer serializer = new RestSerializer();
                returnMessage = serializer.serialize(orders, Arrays.asList("orderLine")).toString();
            }
        } else {
            sendError(channelHandlerContext, HttpResponseStatus.UNAUTHORIZED);
        }

        writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
    }
}
