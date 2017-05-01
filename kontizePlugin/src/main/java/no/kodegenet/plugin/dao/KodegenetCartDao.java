package no.kodegenet.plugin.dao;

import com.google.gson.JsonPrimitive;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.contentice.util.DoubleParser;
import no.haagensoftware.contentice.util.IntegerParser;
import no.kodegenet.handlers.data.CartProduct;
import no.kodegenet.handlers.data.KodegenetShoppingCart;
import no.kodegenet.plugin.BringProduct;
import no.kodegenet.plugin.KodegenetBringPlugin;

import java.text.DecimalFormat;
import java.util.List;

/**
 * Created by jhsmbp on 18/10/15.
 */
public class KodegenetCartDao {

    public static KodegenetShoppingCart getCartFromUuid(StoragePlugin plugin, String host, String uuid) {
        KodegenetShoppingCart cart = null;

        SubCategoryData session = plugin.getSubCategory(host, "sessions", uuid);
        if (session != null) {
            SubCategoryData uuidCat = plugin.getSubCategory(host, "shoppingCarts", uuid);
            if (uuidCat == null) {
                uuidCat = new SubCategoryData();
                uuidCat.setId(uuid);
                uuidCat.getKeyMap().put("status", new JsonPrimitive("new"));
                uuidCat.getKeyMap().put("session", new JsonPrimitive(uuid));

                plugin.setSubCategory(host, "shoppingCarts", uuid, uuidCat);
            }

            cart = convertSubCategoryToShoppingCart(uuidCat, uuid, plugin, host);
        }

        return cart;
    }

    public static BringProduct getShippingPrice(KodegenetShoppingCart cart, String uuid, String postalCodeQp) {
        int standardBox = 1;

        if (cart != null && cart.getCartProducts() != null) {
            double boxes = 0.0;

            for (CartProduct cp : cart.getCartProducts()) {
                double partOfStandardBoxPerItem = 1;

                if (cp.getPartOfStandardBoxPerItem() != null) {
                    partOfStandardBoxPerItem = cp.getPartOfStandardBoxPerItem();
                }
                boxes += partOfStandardBoxPerItem * cp.getOrderedProductNumber().doubleValue();
            }

            standardBox = (int)Math.ceil(boxes);
        }

        if (standardBox < 1) {
            standardBox = 1;
        }

        int tilPostnr = 1164;

        if (postalCodeQp != null) {
            tilPostnr = IntegerParser.parseIntegerFromString(postalCodeQp, 7000);
        } else if (cart.getPostalCode() != null) {
            tilPostnr = IntegerParser.parseIntegerFromString(cart.getPostalCode(), 7000);
        }


        int weight = 500;
        int length = 23;
        int width = 17;
        int height = 15;

        BringProduct bringProduct = KodegenetBringPlugin.getInstance().getPriceForServicepakke(
                1164,
                tilPostnr,
                weight,
                length,
                width,
                height
        );

        if (standardBox > 1) {
            Double amounWithVat = DoubleParser.parseDoubleFromString(bringProduct.getPrice().getPackagePriceWithAdditionalServices().getAmountWithVAT(), 0d);
            amounWithVat *= standardBox;

            DecimalFormat df = new DecimalFormat();
            df.setMinimumFractionDigits(2);
            df.setMaximumFractionDigits(2);

            bringProduct.getPrice().getPackagePriceWithAdditionalServices().setAmountWithVAT(df.format(amounWithVat));
            bringProduct.getPrice().getPackagePriceWithAdditionalServices().setAmountWithoutVAT(df.format(amounWithVat*0.8d));
        }

        return bringProduct;
    }

    public static KodegenetShoppingCart convertSubCategoryToShoppingCart(SubCategoryData sd, String session, StoragePlugin storage, String webappName) {
        KodegenetShoppingCart cart = new KodegenetShoppingCart();
        cart.setId(sd.getId());

        if (cart.getId().startsWith("shoppingCarts_")) {
            cart.setId(cart.getId().substring(14));
        }

        cart.setDiscountAmount(sd.getIntegerValueForKey("discountAmount"));
        cart.setDiscountPercentage(sd.getIntegerValueForKey("discountPercentage"));
        cart.setSession(session);
        cart.setStatus(sd.getValueForKey("status"));
        cart.setStripeEmail(sd.getValueForKey("stripeEmail"));
        cart.setStripeToken(sd.getValueForKey("stripeToken"));
        cart.setStripeTokenType(sd.getValueForKey("stripeTokenType"));

        cart.setCity(sd.getValueForKey("city"));
        cart.setAddress(sd.getValueForKey("address"));
        cart.setGivenName(sd.getValueForKey("givenName"));
        cart.setSurname(sd.getValueForKey("surname"));
        cart.setPostalCode(sd.getValueForKey("postalCode"));
        cart.setEmailAddress(sd.getValueForKey("emailAddress"));
        cart.setCreateAccount(sd.getBooleanValueForKey("createAccount"));

        cart.setShippingType(sd.getValueForKey("shippingType"));
        cart.setShippingCost(sd.getDoubleValueForKey("shippingCost"));

        List<String> cartProducts = sd.getListForKey("cartProducts");
        boolean canShipWithFixedCost = false;
        for (String cp : cartProducts) {
            SubCategoryData cpSd = storage.getSubCategory(webappName, "cartProducts", cp);
            cart.getCartProducts().add(convertSubCategoryToCartProduct(cpSd));
            if (cpSd.getIntegerValueForKey("fixedShippingCost") != null) {
                canShipWithFixedCost = true;
            }
        }

        cart.setCanShipWithFixedCost(canShipWithFixedCost);

        return cart;
    }

    public static SubCategoryData convertShoppingCartToSubcategory(KodegenetShoppingCart cart) {
        SubCategoryData sd = new SubCategoryData();
        sd.setId(cart.getId());
        sd.getKeyMap().put("session", new JsonPrimitive(cart.getSession()));

        if (cart.getAddress() != null) {
            sd.getKeyMap().put("emailAddress", new JsonPrimitive(cart.getEmailAddress()));
        }

        if (cart.getGivenName() != null) {
            sd.getKeyMap().put("givenName", new JsonPrimitive(cart.getGivenName()));
        }

        if (cart.getSurname() != null) {
            sd.getKeyMap().put("surname", new JsonPrimitive(cart.getSurname()));
        }

        if (cart.getPostalCode() != null) {
            sd.getKeyMap().put("postalCode", new JsonPrimitive(cart.getPostalCode()));
        }

        if (cart.getCity() != null) {
            sd.getKeyMap().put("city", new JsonPrimitive(cart.getCity()));
        }

        if (cart.getAddress() != null) {
            sd.getKeyMap().put("address", new JsonPrimitive(cart.getAddress()));
        }

        if (cart.getStatus() != null) {
            sd.getKeyMap().put("status", new JsonPrimitive(cart.getStatus()));
        }

        if (cart.getCreateAccount() != null) {
            sd.getKeyMap().put("createAccount", new JsonPrimitive(cart.getCreateAccount()));
        }

        if (cart.getShippingType() != null) {
            sd.getKeyMap().put("shippingType", new JsonPrimitive(cart.getShippingType()));
        }

        if (cart.getShippingCost() != null) {
            sd.getKeyMap().put("shippingCost", new JsonPrimitive(cart.getShippingCost()));
        }

        return sd;
    }

    public static CartProduct convertSubCategoryToCartProduct(SubCategoryData sd) {
        CartProduct cp = new CartProduct();
        cp.setId(sd.getId());

        if (cp.getId().startsWith("cartProducts_")) {
            cp.setId(cp.getId().substring(13));
        }

        cp.setOrderedProductNumber(sd.getIntegerValueForKey("orderedProductNumber"));
        cp.setTotalAmount(sd.getDoubleValueForKey("totalAmount"));
        cp.setDiscountAmount(sd.getDoubleValueForKey("discountAmount"));
        cp.setProduct(sd.getValueForKey("product"));
        cp.setPartOfStandardBoxPerItem(sd.getDoubleValueForKey("partOfStandardBoxPerItem"));
        cp.setFixedShippingCost(sd.getIntegerValueForKey("fixedShippingCost"));

        return cp;
    }
}
