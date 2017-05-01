package no.kodegenet.handlers;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.kodegenet.handlers.data.KodegenetEmail;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetOrderLine;
import no.kodegenet.handlers.data.KodegenetProduct;
import no.kodegenet.plugin.EmailTemplatePlugin;
import no.kodegenet.plugin.dao.KodegenetOrderDao;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by jhsmbp on 1/16/14.
 */
public class ResendOrderConfirmationHandler extends ContenticeHandler {

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {

        String orderid = getParameter("orderId");

        if (orderid != null) {
            KodegenetOrder order = KodegenetOrderDao.getKodegentOrder(getStorage(), getDomain().getWebappName(), orderid);
            order.setOrderLines(KodegenetOrderDao.getKodegenetOrderLines(getStorage(), getDomain().getWebappName(), orderid));

            KodegenetOrderDao.generateOrderUpdateEmail(getStorage(), getDomain().getWebappName(), order);
        }

        writeContentsToBuffer(channelHandlerContext, "{\"status\": \"OK\"}", "application/json");
    }


}
