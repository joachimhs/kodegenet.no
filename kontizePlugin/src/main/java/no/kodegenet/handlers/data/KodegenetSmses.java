package no.kodegenet.handlers.data;

import no.haagensoftware.conticious.plugin.nexmo.data.NexmoRecipientData;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.ArrayList;
import java.util.List;
/**
 * Created by jhsmbp on 08/10/16.
 */
@SerializedClassName("smses")
public class KodegenetSmses {
    private String id;
    private String message;
    private String name;
    private List<KodegenetSmsRecipient> recipients;

    public KodegenetSmses() {
        recipients = new ArrayList<>();
    }

    public KodegenetSmses(String id, String message, String name, List<NexmoRecipientData> recipients) {
        this();
        this.id = id;
        this.message = message;
        this.name = name;

        if (recipients != null && recipients.size() > 0) {
            for (NexmoRecipientData nexmoRecipientData: recipients) {
                this.recipients.add(new KodegenetSmsRecipient(id, nexmoRecipientData, message));
            }
        }
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<KodegenetSmsRecipient> getRecipients() {
        return recipients;
    }

    public void setRecipients(List<KodegenetSmsRecipient> recipients) {
        this.recipients = recipients;
    }
}
