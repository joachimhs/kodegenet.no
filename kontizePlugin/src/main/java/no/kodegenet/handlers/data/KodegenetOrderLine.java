package no.kodegenet.handlers.data;

import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

/**
 * Created by jhsmbp on 05/04/15.
 */
@SerializedClassName("orderLine")
public class KodegenetOrderLine {
    @Expose private String id;
    @Expose private String order;
    @Expose private String product;
    @Expose private Integer orderedProductNumber;
    @Expose private Double totalAmount;
    @Expose private Double discountAmount;

    public KodegenetOrderLine() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public Integer getOrderedProductNumber() {
        return orderedProductNumber;
    }

    public void setOrderedProductNumber(Integer orderedProductNumber) {
        this.orderedProductNumber = orderedProductNumber;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Double getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(Double discountAmount) {
        this.discountAmount = discountAmount;
    }
}
