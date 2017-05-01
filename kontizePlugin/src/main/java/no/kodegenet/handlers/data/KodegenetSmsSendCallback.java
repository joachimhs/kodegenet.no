package no.kodegenet.handlers.data;

import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.conticious.plugin.nexmo.SendSmsTask;
import no.haagensoftware.conticious.plugin.nexmo.SendSmsTaskCallback;
import no.haagensoftware.conticious.plugin.nexmo.data.NexmoData;
import no.haagensoftware.conticious.plugin.nexmo.data.NexmoRecipientData;
import no.kodegenet.plugin.dao.KodegenetSmsDao;
import org.apache.log4j.Logger;

/**
 * Created by jhsmbp on 08/10/16.
 */
public class KodegenetSmsSendCallback implements SendSmsTaskCallback {
    private static Logger logger = Logger.getLogger(KodegenetSmsSendCallback.class.getName());
    private StoragePlugin storagePlugin;
    private String host;
    private String identifier;

    public KodegenetSmsSendCallback(StoragePlugin storagePlugin, String host, String identifier) {
        this.storagePlugin = storagePlugin;
        this.host = host;
        this.identifier = identifier;
    }

    @Override
    public void runnableFinished(SendSmsTask sendSmsTask) {
        NexmoRecipientData nexmoRecipientData = sendSmsTask.getNexmoRecipientData();

        KodegenetSmsDao.persistSmsRecipient(storagePlugin, host,
                new KodegenetSmsRecipient(identifier, nexmoRecipientData, sendSmsTask.getMessage()));
    }
}
