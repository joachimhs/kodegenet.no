package no.kodegenet.handlers;

import com.google.gson.Gson;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.deserializer.RestDeserializer;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.EventParticipant;
import no.kodegenet.handlers.data.KodegenetEvent;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.plugin.dao.KodegenetEventDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.List;

/**
 * Created by jhsmbp on 01/10/15.
 */
public class EventHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String returnMessage = "";

        String uuidToken = getCookieValue(fullHttpRequest, "uuid");
        String eventId = getParameter("eventId");

        RestSerializer restSerializer = new RestSerializer();
        RestDeserializer restDeserializer = new RestDeserializer();

        if ((isPost(fullHttpRequest) || isPut(fullHttpRequest) && uuidToken != null && uuidToken.length() > 10)) {
            String messageContent = getHttpMessageContent(fullHttpRequest);

            KodegenetSession session = KodegenetUserDao.getSession(getStorage(), getDomain().getWebappName(), uuidToken);

            if (session != null && session.isAuthenticated() && messageContent != null && messageContent.length() >= 2) {
                KodegenetEvent event = restDeserializer.deserialize(messageContent, KodegenetEvent.class);
                event.setId(eventId);

                KodegenetEventDao.storeEvent(getStorage(), getDomain().getWebappName(), event);

                returnMessage = restSerializer.serialize(event).toString();
            }
        } else if (isGet(fullHttpRequest) && eventId != null) {
            //Get single event
            KodegenetEvent event = KodegenetEventDao.getEvent(getStorage(), getDomain().getWebappName(), eventId);

            returnMessage = restSerializer.serialize(event).toString();
        } else if (isGet(fullHttpRequest)) {
            //Get all events
            List<KodegenetEvent> eventList = KodegenetEventDao.getEvents(getStorage(), getDomain().getWebappName());

            returnMessage = restSerializer.serialize(eventList).toString();
        }

        writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
    }
}