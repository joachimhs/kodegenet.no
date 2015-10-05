package no.kodegenet.handlers;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.KodegenetInstagramData;
import no.kodegenet.instagram.InstagramData;
import no.kodegenet.instagram.InstagramObject;
import no.kodegenet.instagram.InstagramPlugin;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 27/09/15.
 */
public class KodegenetInstagramHandler extends ContenticeHandler {

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        InstagramObject instagramObject = InstagramPlugin.getInstance().getInstagramPhotos();
        List<KodegenetInstagramData> instagramDatas = new ArrayList<>();

        if (instagramObject.getData().size() == 0) {
            instagramObject = InstagramPlugin.getInstance().getInstagramPhotos();
        }

        if (instagramObject != null && instagramObject.getData() != null) {
            for (InstagramData idata : instagramObject.getData()) {
                KodegenetInstagramData outData = new KodegenetInstagramData();
                outData.setId("" + idata.getCreated_time());
                outData.setCaption(idata.getCaption().getText());
                outData.setPostedBy(idata.getCaption().getFrom().getUsername());
                outData.setCreatedTime(idata.getCreated_time());
                outData.setLink(idata.getLink());
                outData.setLowResolution(idata.getImages().getLow_resolution().getUrl());
                outData.setThumbnail(idata.getImages().getThumbnail().getUrl());
                outData.setPostedByPicture(idata.getCaption().getFrom().getProfile_picture());

                instagramDatas.add(outData);
            }
        }

        RestSerializer serializer = new RestSerializer();
        writeContentsToBuffer(channelHandlerContext, serializer.serialize(instagramDatas).toString(), "application/json");
    }
}
