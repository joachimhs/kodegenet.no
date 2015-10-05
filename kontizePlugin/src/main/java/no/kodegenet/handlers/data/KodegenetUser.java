package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 04/06/15.
 */
@SerializedClassName("user")
public class KodegenetUser  {
    @Expose private String id;
    @Expose private String email;
    @Expose private String givenName;
    @Expose private String surname;
    @Expose private String address;
    @Expose private String postalCode;
    @Expose private String city;
    @Expose private String phone;
    @Expose private List<EventParticipant> eventParticipants;

    @Expose
    private List<KodegenetOrder> orders;

    public KodegenetUser() {
        eventParticipants = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<KodegenetOrder> getOrders() {
        return orders;
    }

    public void setOrders(List<KodegenetOrder> orders) {
        this.orders = orders;
    }

    public List<EventParticipant> getEventParticipants() {
        return eventParticipants;
    }

    public void setEventParticipants(List<EventParticipant> eventParticipants) {
        this.eventParticipants = eventParticipants;
    }

    public KodegenetOrder getOrder(String orderId) {
        KodegenetOrder order = null;

        for (KodegenetOrder o : getOrders()) {
            if (o.getId().equals(orderId)) {
                order = o;
                break;
            }
        }

        return order;
    }
}
