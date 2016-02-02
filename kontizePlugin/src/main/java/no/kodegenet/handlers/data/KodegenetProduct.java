package no.kodegenet.handlers.data;

import java.util.List;

/**
 * Created by jhsmbp on 15/10/15.
 */
public class KodegenetProduct {
    private String id;
    private String name;
    private List<String> pictures;
    private String thumbnail;
    private Integer price;
    private List<String> learn;
    private Integer quantity;
    private Double maxItemsInStandardBox;

    public KodegenetProduct() {
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

    public List<String> getPictures() {
        return pictures;
    }

    public void setPictures(List<String> pictures) {
        this.pictures = pictures;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public List<String> getLearn() {
        return learn;
    }

    public void setLearn(List<String> learn) {
        this.learn = learn;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getMaxItemsInStandardBox() {
        return maxItemsInStandardBox;
    }

    public void setMaxItemsInStandardBox(Double maxItemsInStandardBox) {
        this.maxItemsInStandardBox = maxItemsInStandardBox;
    }
}
