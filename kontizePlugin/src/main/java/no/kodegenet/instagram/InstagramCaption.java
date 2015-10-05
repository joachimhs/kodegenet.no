package no.kodegenet.instagram;

/**
 * Created by jhsmbp on 27/09/15.
 */
public class InstagramCaption {
    private String text;
    private InstagramPerson from;


    public InstagramCaption() {
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public InstagramPerson getFrom() {
        return from;
    }

    public void setFrom(InstagramPerson from) {
        this.from = from;
    }
}
