package no.kodegenet.plugin;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

/**
 * Created by jhsmbp on 18/10/15.
 */
@SerializedClassName("shippingPrice")
public class BringPackagePriceWithAdditionalServices {
    @Expose private String id;
    @Expose private String packageType;
    @Expose private String AmountWithoutVAT;
    @Expose private String VAT;
    @Expose private String AmountWithVAT;

    public BringPackagePriceWithAdditionalServices() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAmountWithoutVAT() {
        return AmountWithoutVAT;
    }

    public void setAmountWithoutVAT(String amountWithoutVAT) {
        AmountWithoutVAT = amountWithoutVAT;
    }

    public String getVAT() {
        return VAT;
    }

    public void setVAT(String VAT) {
        this.VAT = VAT;
    }

    public String getAmountWithVAT() {
        return AmountWithVAT;
    }

    public void setAmountWithVAT(String amountWithVAT) {
        AmountWithVAT = amountWithVAT;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }
}
