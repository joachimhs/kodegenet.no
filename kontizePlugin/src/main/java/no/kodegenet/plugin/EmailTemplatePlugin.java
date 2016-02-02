package no.kodegenet.plugin;

import no.haagensoftware.contentice.util.FileUtil;

import java.io.File;
import java.io.IOException;
import java.util.Map;

/**
 * Created by jhsmbp on 16/10/15.
 */
public class EmailTemplatePlugin {
    public static String fetchAndFillInTemplate(String host, String filename, Map<String, String> paramMap) {
        String templateFilename = System.getProperty("no.haagensoftware.contentice.webappDir") + "/" + host +  "/emailTemplates/" + filename;
        File template = new File(templateFilename);
        String templateHtml = null;

        if (template != null && template.isFile() && template.exists()) {
            try {
                templateHtml = FileUtil.getFilecontents(template);

                for (String key : paramMap.keySet()) {
                    templateHtml = templateHtml.replace(key, paramMap.get(key));
                }
            } catch (IOException e) {
                e.printStackTrace();
                templateHtml = null;
            }
        }

        return templateHtml;
    }
}
