package no.kodegenet.handlers;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.handler.ContenticeHandler;

import java.util.List;

/**
 * Created by jhsmbp on 1/17/14.
 */
public class OppgaverHandler extends ContenticeHandler {


    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, FullHttpRequest fullHttpRequest) throws Exception {
        String jsonReturn = "";

        boolean isSubchapter = false;
        String key_plural = "oppgaver";
        String key_singular = "oppgave";

        if (getUri(fullHttpRequest).contains("subchapters")) {
            isSubchapter = true;
            key_plural = "subchapters";
            key_singular = "subchapter";
        }

        String oppgaveId = getParameter("oppgave");

        if (oppgaveId == null) {
            oppgaveId = getParameter("subchapter");
            if (oppgaveId != null) {
                isSubchapter = true;
            }
        }

        List<String> chaptersIds = getQueryStringIds();

        if (isGet(fullHttpRequest) && oppgaveId == null && chaptersIds != null && chaptersIds.size() == 0) {
            List<SubCategoryData> oppgaver = getStorage().getSubCategories(getDomain().getWebappName(), key_plural);

            JsonArray chaptersArray = new JsonArray();
            for (SubCategoryData oppgave : oppgaver) {
                chaptersArray.add(CourseAssembler.buildPageJsonFromSubCategoryData(oppgave));
            }

            JsonObject topLevelObject = new JsonObject();
            topLevelObject.add(key_plural, chaptersArray);
            jsonReturn = topLevelObject.toString();
        } else if (isGet(fullHttpRequest) && oppgaveId != null) {
            SubCategoryData chapter = getStorage().getSubCategory(getDomain().getWebappName(), key_plural, oppgaveId);
            if (chapter != null) {
                JsonObject topLevelObject = new JsonObject();
                JsonObject chapterObject = CourseAssembler.buildPageJsonFromSubCategoryData(chapter);

                topLevelObject.add(key_singular, chapterObject);

                jsonReturn = topLevelObject.toString();
            }
        } else if (isGet(fullHttpRequest) && chaptersIds != null && chaptersIds.size() > 0) {
            JsonArray chaptersArray = new JsonArray();
            for (String id : chaptersIds) {
                SubCategoryData chapter = getStorage().getSubCategory(getDomain().getWebappName(), key_plural, id);
                if (chapter != null) {
                    JsonObject chapterObject = CourseAssembler.buildPageJsonFromSubCategoryData(chapter);
                    chaptersArray.add(chapterObject);
                }
            }

            JsonObject topLevelObject = new JsonObject();
            topLevelObject.add(key_plural, chaptersArray);
            jsonReturn = topLevelObject.toString();
        }

        writeContentsToBuffer(channelHandlerContext, jsonReturn, "application/json");
    }
}
