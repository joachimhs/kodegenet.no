package no.kodegenet.handlers;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.deserializer.RestDeserializer;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetOrderNoRelationship;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;
import no.kodegenet.plugin.dao.KodegenetOrderDao;
import no.kodegenet.plugin.dao.KodegenetUserDao;

import java.util.Arrays;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetOrderHandler extends ContenticeHandler {
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String uuidToken = getCookieValue(fullHttpRequest, "uuid");

        String orderId = getParameter("orderId");

        String returnMessage = "";

        if (orderId != null) {
            if (isGet(fullHttpRequest)) {
                KodegenetOrder order = KodegenetOrderDao.getKodegentOrder(getStorage(), getDomain().getWebappName(), orderId);

                if (order != null) {
                    order.setOrderLines(KodegenetOrderDao.getKodegenetOrderLines(getStorage(), getDomain().getWebappName(), order.getId()));
                    RestSerializer serializer = new RestSerializer();
                    returnMessage = serializer.serialize(order, Arrays.asList("orderLine")).toString();
                }
            }

            if (isPut(fullHttpRequest)) {
                String messageContent = getHttpMessageContent(fullHttpRequest);
                RestDeserializer deserializer = new RestDeserializer();


                KodegenetOrderNoRelationship inputOrder = deserializer.deserialize(messageContent, KodegenetOrderNoRelationship.class);
                KodegenetOrder storedOrder = KodegenetOrderDao.getKodegentOrder(getStorage(), getDomain().getWebappName(), orderId);
                KodegenetUser user = KodegenetUserDao.getUserByUuid(getStorage(), getDomain().getWebappName(), uuidToken);
                if (user != null &&
                        user.getRole() != null &&
                        user.getRole().equals("admin") &&
                        inputOrder != null &&
                        storedOrder != null) {

                    if (inputOrder.getStatus().equals("sendt") && storedOrder.getStatus().equals("paid")) {
                        KodegenetOrderDao.markOrderSendt(getStorage(), getDomain().getWebappName(), orderId);
                    }

                    if (inputOrder.getTrackingUrl() != null && !inputOrder.getTrackingUrl().equals(storedOrder.getTrackingUrl())) {
                        if (inputOrder.getTrackingUrl() != null && inputOrder.getTrackingUrl().equals("")) {
                            inputOrder.setTrackingUrl(null);
                        } else if (!inputOrder.getTrackingUrl().startsWith("http")) {
                            inputOrder.setTrackingUrl("http://sporing.bring.no/sporing.html?q=" + inputOrder.getTrackingUrl());
                        }
                        KodegenetOrderDao.addTrackingUrl(getStorage(), getDomain().getWebappName(), orderId, inputOrder.getTrackingUrl());
                    }
                }
            }
        }

        writeContentsToBuffer(channelHandlerContext, returnMessage, "application/json");
    }
}
