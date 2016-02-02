package no.kodegenet.plugin;

/**
 * Created by jhsmbp on 18/10/15.
 */
public class BringProduct {
    private String ProductId;
    private String ProductCodeInProductionSystem;
    private BringProductPrice Price;

    public BringProduct() {
    }


    public String getProductId() {
        return ProductId;
    }

    public void setProductId(String productId) {
        ProductId = productId;
    }

    public String getProductCodeInProductionSystem() {
        return ProductCodeInProductionSystem;
    }

    public void setProductCodeInProductionSystem(String productCodeInProductionSystem) {
        ProductCodeInProductionSystem = productCodeInProductionSystem;
    }

    public BringProductPrice getPrice() {
        return Price;
    }

    public void setPrice(BringProductPrice price) {
        Price = price;
    }
}
