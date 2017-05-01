package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/**
 * Created by jhsmbp on 08/10/16.
 */
@SerializedClassName("sendSms")
public class KodegenetSendSms {
    @Expose private String smsMessage;
    @Expose private String name;
    @Expose private String smsRecipients;

    public KodegenetSendSms(String smsMessage, String name, String smsRecipients) {
        this.smsMessage = smsMessage;
        this.name = name;
        this.smsRecipients = smsRecipients;
    }

    public String getSmsMessage() {
        return smsMessage;
    }

    public void setSmsMessage(String smsMessage) {
        this.smsMessage = smsMessage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSmsRecipients() {
        return smsRecipients;
    }

    public void setSmsRecipients(String smsRecipients) {
        this.smsRecipients = smsRecipients;
    }

    public List<String> getSmsRecipientList() {
        List<String> recipients = new ArrayList<>();

        if (this.smsRecipients != null && this.smsRecipients.length() >= 8) {
            if (this.smsRecipients.contains(",")) {
                recipients.addAll(Arrays.asList(this.smsRecipients.split(",")));
            } else {
                recipients.add(this.smsRecipients);
            }
        }

        return recipients;
    }
}
