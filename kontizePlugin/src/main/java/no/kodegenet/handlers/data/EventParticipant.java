package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

/**
 * Created by jhsmbp on 01/10/15.
 */
@SerializedClassName("eventParticipant")
public class EventParticipant {
    @Expose private String id;
    @Expose private String givenName;
    @Expose private String surname;
    @Expose private Integer age;
    @Expose private String email;
    @Expose private Boolean publishInfo;
    @Expose private String username;
    @Expose private Boolean allowPictures;

    public EventParticipant() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getPublishInfo() {
        return publishInfo;
    }

    public void setPublishInfo(Boolean publishInfo) {
        this.publishInfo = publishInfo;
    }

    public Boolean getAllowPictures() {
        return allowPictures;
    }

    public void setAllowPictures(Boolean allowPictures) {
        this.allowPictures = allowPictures;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
