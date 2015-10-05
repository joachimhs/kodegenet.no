package no.kodegenet.plugin.dao;

import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetOrderLine;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 27/08/15.
 */
public class KodegenetOrderDao {

    public static KodegenetOrder getKodegentOrder(StoragePlugin plugin, String host, String orderId) {
        KodegenetOrder order = null;

        SubCategoryData sd = plugin.getSubCategory(host, "orders", orderId);

        if (sd.getId().startsWith("orders_")) {
            sd.setId(sd.getId().substring(7));
        }

        order = convertSubcategoryToOrder(sd);

        return order;
    }

    public static List<KodegenetOrderLine> getKodegenetOrderLines(StoragePlugin plugin, String host, String orderId) {
        List<KodegenetOrderLine> lines = new ArrayList<>();

        SubCategoryData sd = plugin.getSubCategory(host, "orders", orderId);

        if (sd != null) {
            for (String line : sd.getListForKey("orderLines")) {
                KodegenetOrderLine kol = convertSubcategoryToOrderLine(plugin.getSubCategory(host, "orderLines", line));
                if (kol != null) {
                    lines.add(kol);
                }
            }
        }

        return lines;
    }

    private static KodegenetOrderLine convertSubcategoryToOrderLine(SubCategoryData sd) {
        KodegenetOrderLine line = null;

        if (sd != null) {
            line = new KodegenetOrderLine();

            String id = sd.getId();
            if (id != null && id.startsWith("orderLines_")) {
                id = id.substring(11);
            }

            line.setId(id);
            line.setProduct(sd.getValueForKey("product"));
            line.setOrderedProductNumber(sd.getIntegerValueForKey("orderedProductNumber"));
            line.setTotalAmount(sd.getDoubleValueForKey("totalAmount"));
            line.setDiscountAmount(sd.getDoubleValueForKey("discountAmount"));
        }

        return line;
    }

    private static KodegenetOrder convertSubcategoryToOrder(SubCategoryData sd) {
        KodegenetOrder order = new KodegenetOrder();

        if (sd != null) {
            order.setId(sd.getId());
            order.setStatus(sd.getValueForKey("status"));
            order.setStripeToken(sd.getValueForKey("stripeToken"));
            order.setStripeEmail(sd.getValueForKey("stripeEmail"));
            order.setStripeTokenType(sd.getValueForKey("stripeTokenType"));
            order.setDiscountAmount(sd.getIntegerValueForKey("discountAmount"));
            order.setDiscountPercentage(sd.getIntegerValueForKey("discountPercentage"));


            order.setGivenName(sd.getValueForKey("givenName"));
            order.setSurname(sd.getValueForKey("surname"));
            order.setAddress(sd.getValueForKey("address"));
            order.setPostalCode(sd.getValueForKey("postalCode"));
            order.setCity(sd.getValueForKey("city"));
            order.setEmailAddress(sd.getValueForKey("emailAddress"));

            order.setSession(sd.getValueForKey("session"));
            order.setCreateAccount(sd.getBooleanValueForKey("createAccount"));
        }

        return order;
    }
}
