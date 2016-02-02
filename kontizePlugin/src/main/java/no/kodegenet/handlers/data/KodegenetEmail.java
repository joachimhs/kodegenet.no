package no.kodegenet.handlers.data;

/**
 * Created by jhsmbp on 15/10/15.
 */
public class KodegenetEmail {
    private String id;
    private String subject;
    private String message;
    private String epost;

    public KodegenetEmail() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
