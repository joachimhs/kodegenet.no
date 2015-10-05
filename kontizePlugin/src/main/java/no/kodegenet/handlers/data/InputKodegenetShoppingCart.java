package no.kodegenet.handlers.data;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 14/03/15.
 */
public class InputKodegenetShoppingCart {
    private String id;
    private String status;
    private String stripeToken;
    private String stripeTokenType;
    private String stripeEmail;
    private Integer discountPercentage;
    private Integer discountAmount;
    private String session;
    List<String> cartProducts;

    private String emailAddress;
    private String givenName;
    private String surname;
    private String address;
    private String postalCode;
    private String city;
    private Boolean createAccount;

    public InputKodegenetShoppingCart() {
        cartProducts = new ArrayList<>();
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

    public List<String> getCartProducts() {
        return cartProducts;
    }

    public void setCartProducts(List<String> cartProducts) {
        this.cartProducts = cartProducts;
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
