package no.kodegenet.handlers.data;

/**
 * Created by jhsmbp on 14/03/15.
 */
public class StripeToken {
    private String stripeToken;
    private String stripeTokenString;
    private String stripeEmail;

    public StripeToken() {
    }

    public String getStripeToken() {
        return stripeToken;
    }

    public void setStripeToken(String stripeToken) {
        this.stripeToken = stripeToken;
    }

    public String getStripeTokenString() {
        return stripeTokenString;
    }

    public void setStripeTokenString(String stripeTokenString) {
        this.stripeTokenString = stripeTokenString;
    }

    public String getStripeEmail() {
        return stripeEmail;
    }

    public void setStripeEmail(String stripeEmail) {
        this.stripeEmail = stripeEmail;
    }
}
