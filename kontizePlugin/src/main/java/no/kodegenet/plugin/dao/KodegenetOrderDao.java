package no.kodegenet.plugin.dao;

import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.kodegenet.handlers.data.KodegenetEmail;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetOrderLine;
import no.kodegenet.handlers.data.KodegenetProduct;
import no.kodegenet.plugin.EmailTemplatePlugin;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by jhsmbp on 27/08/15.
 */
public class KodegenetOrderDao {

    //* Admin methods */
    public static List<KodegenetOrder> getKodegenetOrders(StoragePlugin plugin, String host) {
        List<KodegenetOrder> orders = new ArrayList<>();

        for (SubCategoryData sd : plugin.getSubCategories(host, "orders")) {
            if (sd.getId().startsWith("orders_")) {
                sd.setId(sd.getId().substring(7));
            }

            KodegenetOrder order = convertSubcategoryToOrder(sd);
            order.setOrderLines(getKodegenetOrderLines(plugin, host, order.getId()));

            orders.add(order);
        }

        return orders;
    }

    public static void markOrderSendt(StoragePlugin plugin, String host, String orderId) {
        KodegenetOrder order = getKodegentOrder(plugin, host, orderId);
        order.setOrderLines(getKodegenetOrderLines(plugin, host, orderId));
        order.setStatus("sendt");
        order.setShipmentDate(System.currentTimeMillis());

        plugin.setSubCategory(host, "orders", orderId, SubCategoryUtil.convertObjectToSubCateogory(order));
    }

    public static void addTrackingUrl(StoragePlugin plugin, String host, String orderId, String trackingUrl) {
        KodegenetOrder order = getKodegentOrder(plugin, host, orderId);
        order.setOrderLines(getKodegenetOrderLines(plugin, host, orderId));
        order.setTrackingUrl(trackingUrl);

        plugin.setSubCategory(host, "orders", orderId, SubCategoryUtil.convertObjectToSubCateogory(order));
    }
    //* //Admin Methods */

    public static KodegenetOrder getKodegentOrder(StoragePlugin plugin, String host, String orderId) {
        KodegenetOrder order = null;

        SubCategoryData sd = plugin.getSubCategory(host, "orders", orderId);

        if (sd.getId().startsWith("orders_")) {
            sd.setId(sd.getId().substring(7));
        }

        order = convertSubcategoryToOrder(sd);

        return order;
    }

    public static KodegenetProduct getKodegenetProduct(StoragePlugin plugin, String host, String productId) {
        KodegenetProduct product = null;

        SubCategoryData sd = plugin.getSubCategory(host, "products", productId);

        if (sd != null) {
            product = SubCategoryUtil.convertSubcategoryToObject("products", sd, KodegenetProduct.class);
        }

        return product;
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

    public static void generateOrderUpdateEmail(StoragePlugin storage, String webapp, KodegenetOrder order) {
        Map<String, String> emailMap = new HashMap<>();
        emailMap.put("{ordrestatus}", order.getStatus());
        emailMap.put("{ordernumber}", "<a href=\"https://kodegenet.no/mypage/orders/confirmation/" + order.getId() + "\">" + order.getId() + "</a>");
        emailMap.put("{orderlines}", generateOrderLinesHtml(storage, webapp, order));
        emailMap.put("{shippingInformation}", "");

        if (order.getTrackingUrl() != null && order.getTrackingUrl().length() > 5) {
            emailMap.put("{shippingInformation}", "Ordren kan spores via <a href=\"" + order.getTrackingUrl() + " \">" + order.getTrackingUrl() + " </a>.");
        }
        String email = EmailTemplatePlugin.fetchAndFillInTemplate(webapp, "orderUpdateTemplate.html", emailMap);

        KodegenetEmail kodegenetEmail = new KodegenetEmail();
        kodegenetEmail.setId(order.getEmailAddress() + "_" + System.currentTimeMillis());
        kodegenetEmail.setSubject("Din Kodegenet bestilling er oppdatert!");
        kodegenetEmail.setMessage(email);
        kodegenetEmail.setEpost(order.getEmailAddress());

        storage.setSubCategory(
                webapp,
                "emailsNotSent",
                kodegenetEmail.getId(),
                SubCategoryUtil.convertObjectToSubCateogory(kodegenetEmail)
        );
    }

    public static void generateOrderEmail(StoragePlugin storage, String webapp, KodegenetOrder order) {
        Map<String, String> emailMap = new HashMap<>();
        emailMap.put("{ordernumber}", "<a href=\"https://kodegenet.no/mypage/orders/confirmation/" + order.getId() + "\">" + order.getId() + "</a>");
        emailMap.put("{orderlines}", generateOrderLinesHtml(storage, webapp, order));
        String email = EmailTemplatePlugin.fetchAndFillInTemplate(webapp, "orderTemplate.html", emailMap);

        KodegenetEmail kodegenetEmail = new KodegenetEmail();
        kodegenetEmail.setId(order.getEmailAddress() + "_" + System.currentTimeMillis());
        kodegenetEmail.setSubject("Takk for din bestilling hos Kodegenet!");
        kodegenetEmail.setMessage(email);
        kodegenetEmail.setEpost(order.getEmailAddress());

        storage.setSubCategory(
                webapp,
                "emailsNotSent",
                kodegenetEmail.getId(),
                SubCategoryUtil.convertObjectToSubCateogory(kodegenetEmail)
        );

    }

    private static String generateOrderLinesHtml(StoragePlugin storage, String webapp, KodegenetOrder order) {
        NumberFormat nf = new DecimalFormat();
        nf.setMinimumFractionDigits(2);
        nf.setMaximumFractionDigits(2);
        nf.setGroupingUsed(true);
        String html = "<table><thead><tr><th>Produkt</th><th>Antall</th><th>Pris</th><th>Rabatt</th></tr></thead><tbody>";

        int subtotal = 0;
        for (KodegenetOrderLine ol : order.getOrderLines()) {
            KodegenetProduct product = KodegenetOrderDao.getKodegenetProduct(storage, webapp, ol.getProduct());

            String productName = ol.getProduct();
            if (product != null) {
                productName = product.getName();
            }

            html += "<tr><td>" + productName + "</td><td>" + ol.getOrderedProductNumber() + "</td><td>Kr. " + nf.format(ol.getTotalAmount()) + "</td><td>Kr. " + nf.format(ol.getDiscountAmount() != null ? ol.getDiscountAmount() : 0) + "</td></tr>";
            subtotal += ol.getTotalAmount();
        }


        double shippingCost = 0d;
        if (order.getShippingCost() != null && order.getShippingCost() > 0d) {
            shippingCost = order.getShippingCost();
            subtotal += shippingCost;
            html += "<tr><td>Frakt: </td><td></td><td>Kr. " + nf.format(order.getShippingCost()) + "</td><td></td></tr>";
        }

        double tax = subtotal * 0.2;
        html += "<tr><td colspan=\"2\" class=\"rightAlign\">Subtotal:</td><td>Kr. " + nf.format(subtotal) + "</td></tr><tr><td colspan=\"2\" class=\"rightAlign\">Hvorav MVA (25%):</td><td>Kr. " + nf.format(tax) + "</td></tr>";

        html += "</tbody></table>";

        return  html;
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

            order.setCreatedDate(sd.getLongValueForKey("createdDate"));
            order.setPaymentDate(sd.getLongValueForKey("paymentDate"));
            order.setShipmentDate(sd.getLongValueForKey("shipmentDate"));

            order.setShippingType(sd.getValueForKey("shippingType"));
            order.setShippingCost(sd.getDoubleValueForKey("shippingCost"));

            order.setTrackingUrl(sd.getValueForKey("trackingUrl"));
        }

        return order;
    }
}
