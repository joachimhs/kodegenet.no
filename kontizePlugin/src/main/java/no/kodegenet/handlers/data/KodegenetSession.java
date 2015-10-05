package no.kodegenet.handlers.data;

/**
 * Created by jhsmbp on 12/03/15.
 */

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

@SerializedClassName("session")
public class KodegenetSession {
    @Expose
    @SerializedName("id")
    private String uuid;

    @Expose
    private boolean authenticated;

    @Expose
    private Long lastAccessed;

    @Expose
    private Long created;

    @Expose
    private boolean acceptedCookies;

    @Expose
    private String user;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }

    public Long getLastAccessed() {
        return lastAccessed;
    }

    public void setLastAccessed(Long lastAccessed) {
        this.lastAccessed = lastAccessed;
    }

    public Long getCreated() {
        return created;
    }

    public void setCreated(Long created) {
        this.created = created;
    }

    public boolean isAcceptedCookies() {
        return acceptedCookies;
    }

    public void setAcceptedCookies(boolean acceptedCookies) {
        this.acceptedCookies = acceptedCookies;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}