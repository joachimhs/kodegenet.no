package no.kodegenet.email;

import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.kodegenet.handlers.data.KodegenetEmail;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 19/02/14.
 */
public class SendRemainingEmailsThread implements Runnable {
    private static final Logger logger = Logger.getLogger(SendRemainingEmailsThread.class.getName());

    private StoragePlugin storagePlugin;
    private String host;

    public SendRemainingEmailsThread(String host, StoragePlugin storagePlugin) {
        this.storagePlugin = storagePlugin;
        this.host = host;
    }

    @Override
    public void run() {
        List<SubCategoryData> subCategoryDatas = storagePlugin.getSubCategories(host, "emailsNotSent");

        logger.info("Sending remaining emails: " + subCategoryDatas.size());

        for (SubCategoryData emailSd: subCategoryDatas) {
            KodegenetEmail email = SubCategoryUtil.convertSubcategoryToObject("emailsNotSent", emailSd, KodegenetEmail.class);

            KodegenetEpostThread orderEpostThread = new KodegenetEpostThread(host, email, storagePlugin);
            orderEpostThread.run();
        }
    }
}
