package no.kodegenet.handlers;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.deserializer.RestDeserializer;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.EventParticipant;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.plugin.dao.KodegenetEventDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

/**
 * Created by jhsmbp on 01/10/15.
 */
public class EventParticipantHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String returnMessage = "";

        String uuidToken = getCookieValue(fullHttpRequest, "uuid");
        String eventParticipantId = getParameter("eventParticipantId");

        if (isPost(fullHttpRequest)) {
            EventParticipant eventParticipant = new RestDeserializer().deserialize(getHttpMessageContent(fullHttpRequest), EventParticipant.class);

            if (uuidToken != null && uuidToken.length() > 10 && eventParticipant != null) {
                KodegenetSession session = KodegenetUserDao.getSession(getStorage(), getDomain().getWebappName(), uuidToken);

                if (session != null && session.getUser() != null) {
                    KodegenetUser user = KodegenetUserDao.getUser(getStorage(), getDomain().getWebappName(), session.getUser());

                    if (user != null && user.getId() != null) {
                        //user.getEventParticipants().add(eventParticipant);

                        boolean hasEventParticipant = false;
                        for (EventParticipant ep : user.getEventParticipants()) {
                            if (ep.getId().equals(eventParticipant.getId())) {
                                hasEventParticipant = true;
                                break;
                            }
                        }

                        if (!hasEventParticipant) {
                            user.getEventParticipants().add(eventParticipant);
                            KodegenetUserDao.persistUser(getStorage(), getDomain().getWebappName(), user);
                        }

                        eventParticipant.setUsername(user.getId());
                        KodegenetEventDao.storeEventParticipant(getStorage(), getDomain().getWebappName(), eventParticipant);

                        RestSerializer serializer = new RestSerializer();
                        returnMessage = serializer.serialize(eventParticipant).toString();
                    }
                }
            }


        } else if (isPut(fullHttpRequest) && eventParticipantId != null) {
            EventParticipant eventParticipant = new RestDeserializer().deserialize(getHttpMessageContent(fullHttpRequest), EventParticipant.class);

            if (eventParticipant != null && eventParticipantId != null) {
                eventParticipant.setId(eventParticipantId);

                KodegenetEventDao.storeEventParticipant(getStorage(), getDomain().getWebappName(), eventParticipant);

                RestSerializer serializer = new RestSerializer();
                returnMessage = serializer.serialize(eventParticipant).toString();
            }
        } else if (isGet(fullHttpRequest) && eventParticipantId != null) {
            EventParticipant participant = KodegenetEventDao.getEventParticipant(getStorage(), getDomain().getWebappName(), eventParticipantId);

            if (participant != null) {
                EventParticipant returnParticipant = new EventParticipant();
                returnParticipant.setId(participant.getId());
                returnParticipant.setAge((participant.getAge()));

                if (participant.getPublishInfo().booleanValue()) {
                    returnParticipant.setGivenName(participant.getGivenName());
                }

                if (uuidToken != null) {
                    KodegenetUser user = KodegenetUserDao.getUserByUuid(getStorage(), getDomain().getWebappName(), uuidToken);
                    if (user != null && user.getRole() != null && user.getRole().equals("admin")) {
                        returnParticipant.setEmail(participant.getEmail());
                        returnParticipant.setGivenName(participant.getGivenName() + " " + participant.getSurname());
                    }
                }

                RestSerializer serializer = new RestSerializer();
                returnMessage = serializer.serialize(returnParticipant).toString();
            }
        }

        writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
    }
}