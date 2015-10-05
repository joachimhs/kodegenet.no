package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

/**
 * Created by jhsmbp on 27/09/15.
 */
@SerializedClassName("instagramPhoto")
public class KodegenetInstagramData {
    @Expose private String id;
    @Expose private String thumbnail;
    @Expose private String lowResolution;
    @Expose private Long createdTime;
    @Expose private String postedBy;
    @Expose private String postedByPicture;
    @Expose private String caption;
    @Expose private String link;

    public KodegenetInstagramData() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getLowResolution() {
        return lowResolution;
    }

    public void setLowResolution(String lowResolution) {
        this.lowResolution = lowResolution;
    }

    public Long getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Long createdTime) {
        this.createdTime = createdTime;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(String postedBy) {
        this.postedBy = postedBy;
    }

    public String getPostedByPicture() {
        return postedByPicture;
    }

    public void setPostedByPicture(String postedByPicture) {
        this.postedByPicture = postedByPicture;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
