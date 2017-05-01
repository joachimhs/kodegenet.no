package no.kodegenet.handlers;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import no.kodegenet.handlers.data.BlockuinoProject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 1/16/14.
 */
public class BlockuinoProjectHandler extends ContenticeHandler {

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String jsonReturn = "";

        String projectId = getParameter("projectId");


        if (isGet(fullHttpRequest) && projectId != null) {
            SubCategoryData projectSd = getStorage().getSubCategory(getDomain().getWebappName(), "projects", projectId);
            BlockuinoProject bp = null;

            if (projectSd != null) {
                bp = SubCategoryUtil.convertSubcategoryToObject("projects", projectSd, BlockuinoProject.class);
            } else {
                bp = new BlockuinoProject();
                bp.setId(projectId);
            }

            RestSerializer serializer = new RestSerializer();
            writeContentsToBuffer(channelHandlerContext, serializer.serialize(bp, new ArrayList<String>()).toString(), "application/json");
        } else {
            write404ToBuffer(channelHandlerContext);
        }
    }
}
