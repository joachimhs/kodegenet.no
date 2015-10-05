package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.Date;
import java.util.List;

/**
 * Created by jhsmbp on 02/10/15.
 */
@SerializedClassName("event")
public class KodegenetEvent {
    @Expose private String id;
    @Expose private String name;
    @Expose private String content;
    @Expose private String date;
    @Expose private String intro;
    @Expose private String ageGroup;
    @Expose private String isVisible;
    @Expose private String sted;
    @Expose private String timeslot;
    @Expose private String type;
    @Expose private Integer capacity;
    @Expose private Integer remainingSpots;
    @Expose private List<String> eventParticipants;

    public KodegenetEvent() {
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
    }

    public String getIsVisible() {
        return isVisible;
    }

    public void setIsVisible(String isVisible) {
        this.isVisible = isVisible;
    }

    public String getSted() {
        return sted;
    }

    public void setSted(String sted) {
        this.sted = sted;
    }

    public String getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(String timeslot) {
        this.timeslot = timeslot;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getRemainingSpots() {
        return remainingSpots;
    }

    public void setRemainingSpots(Integer remainingSpots) {
        this.remainingSpots = remainingSpots;
    }

    public List<String> getEventParticipants() {
        return eventParticipants;
    }

    public void setEventParticipants(List<String> eventParticipants) {
        this.eventParticipants = eventParticipants;
    }
}
