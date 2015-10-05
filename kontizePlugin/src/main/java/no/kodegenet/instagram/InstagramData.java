package no.kodegenet.instagram;

import java.util.List;

/**
 * Created by jhsmbp on 27/09/15.
 */
public class InstagramData {
    private List<String> tags;
    private Long created_time;
    private String link;
    private InstagramPerson user;
    private InstagramImages images;
    private InstagramCaption caption;

    public InstagramData() {
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Long getCreated_time() {
        return created_time;
    }

    public void setCreated_time(Long created_time) {
        this.created_time = created_time;
    }

    public InstagramPerson getUser() {
        return user;
    }

    public void setUser(InstagramPerson user) {
        this.user = user;
    }

    public InstagramImages getImages() {
        return images;
    }

    public void setImages(InstagramImages images) {
        this.images = images;
    }

    public InstagramCaption getCaption() {
        return caption;
    }

    public void setCaption(InstagramCaption caption) {
        this.caption = caption;
    }
}
