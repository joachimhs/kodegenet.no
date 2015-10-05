package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 12/03/15.
 */
@SerializedClassName("order")
public class KodegenetOrder {
    @Expose private String id;
    @Expose private String status;
    private String stripeToken;
    private String stripeTokenType;
    private String stripeEmail;
    private Integer discountPercentage;
    private Integer discountAmount;
    @Expose private String session;
    @Expose List<KodegenetOrderLine> orderLines;

    @Expose private String emailAddress;
    @Expose private String givenName;
    @Expose private String surname;
    @Expose private String address;
    @Expose private String postalCode;
    @Expose private String city;
    private Boolean createAccount;

    public KodegenetOrder() {
        orderLines = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStripeToken() {
        return stripeToken;
    }

    public void setStripeToken(String stripeToken) {
        this.stripeToken = stripeToken;
    }

    public String getStripeTokenType() {
        return stripeTokenType;
    }

    public void setStripeTokenType(String stripeTokenType) {
        this.stripeTokenType = stripeTokenType;
    }

    public String getStripeEmail() {
        return stripeEmail;
    }

    public void setStripeEmail(String stripeEmail) {
        this.stripeEmail = stripeEmail;
    }

    public Integer getDiscountPercentage() {
        return discountPercentage;
    }

    public void setDiscountPercentage(Integer discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    public Integer getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(Integer discountAmount) {
        this.discountAmount = discountAmount;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }

    public List<KodegenetOrderLine> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(List<KodegenetOrderLine> orderLines) {
        this.orderLines = orderLines;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
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

    public Boolean getCreateAccount() {
        return createAccount;
    }

    public void setCreateAccount(Boolean createAccount) {
        this.createAccount = createAccount;
    }
}
