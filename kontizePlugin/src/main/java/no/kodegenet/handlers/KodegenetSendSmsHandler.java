package no.kodegenet.handlers;

import com.google.gson.Gson;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.util.UUIDUtil;
import no.haagensoftware.conticious.plugin.nexmo.NexmoAlertService;
import no.haagensoftware.conticious.plugin.nexmo.data.NexmoRecipientData;
import no.kodegenet.handlers.data.KodegenetSendSms;
import no.kodegenet.handlers.data.KodegenetSmsSendCallback;
import no.kodegenet.handlers.data.KodegenetSmses;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.plugin.dao.KodegenetSmsDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;

/**
 * Created by jhsmbp on 08/10/16.
 */
public class KodegenetSendSmsHandler extends ContenticeHandler {
    private static final Logger logger = Logger.getLogger(KodegenetSendSmsHandler.class.getName());

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {

        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        KodegenetUser user = KodegenetUserDao.getUserByUuid(getStorage(), getDomain().getWebappName(), uuidToken);
        if (user != null && user.getRole() != null && user.getRole().equals("admin")) {
            if (isPost(fullHttpRequest)) {
                String content = getHttpMessageContent(fullHttpRequest);
                KodegenetSendSms sendSms = new Gson().fromJson(content, KodegenetSendSms.class);

                if (sendSms != null && sendSms.getSmsMessage() != null && sendSms.getSmsRecipients() != null) {
                    String uuid = UUIDUtil.getUniqueString(14);

                    KodegenetSmsSendCallback callback =
                            new KodegenetSmsSendCallback(getStorage(), getDomain().getWebappName(), uuid);

                    NexmoAlertService nas = NexmoAlertService.getInstance("kodegenet");
                    List<NexmoRecipientData> recipientDataList =
                            nas.sendSms(sendSms.getSmsRecipientList(), sendSms.getSmsMessage(), callback);

                    KodegenetSmses smses = new KodegenetSmses(uuid, sendSms.getSmsMessage(), sendSms.getName(), recipientDataList);
                    KodegenetSmsDao.persistSmses(getStorage(), getDomain().getWebappName(), smses);

                    writeOKToBuffer(channelHandlerContext);
                }
            }
        } else {
            sendError(channelHandlerContext, HttpResponseStatus.UNAUTHORIZED);
        }
    }
}
