package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.Date;

/**
 * Created by jhsmbp on 14/08/16.
 */
@SerializedClassName("project")
public class BlockuinoProject {
    @Expose private String id;
    @Expose private String name;
    @Expose private String xml;
    @Expose private String createdDate;
    @Expose private String content;
    @Expose private String title;
    @Expose private String username;

    public BlockuinoProject() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getXml() {
        return xml;
    }

    public void setXml(String xml) {
        this.xml = xml;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
