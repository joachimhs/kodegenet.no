package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.conticious.plugin.nexmo.data.NexmoRecipientData;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.Date;

/**
 * Created by jhsmbp on 08/10/16.
 */
@SerializedClassName("smsRecipient")
public class KodegenetSmsRecipient {
    @Expose private String id;
    @Expose private String smsResult;
    @Expose private Date sentDate;
    @Expose private String message;
    @Expose private String to;

    public KodegenetSmsRecipient() {
    }

    public KodegenetSmsRecipient(String id, NexmoRecipientData nrd, String message) {
        this.id = id + "_" + nrd.getNumber();
        this.to = nrd.getNumber();
        this.sentDate = new Date();
        this.smsResult = nrd.getResponseText();
        this.message = message;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSmsResult() {
        return smsResult;
    }

    public void setSmsResult(String smsResult) {
        this.smsResult = smsResult;
    }

    public Date getSentDate() {
        return sentDate;
    }

    public void setSentDate(Date sentDate) {
        this.sentDate = sentDate;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
