package no.kodegenet.plugin.dao;

import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.kodegenet.handlers.data.EventParticipant;
import no.kodegenet.handlers.data.KodegenetOrder;
import no.kodegenet.handlers.data.KodegenetSession;
import no.kodegenet.handlers.data.KodegenetUser;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetUserDao {

    public static KodegenetUser getUser(StoragePlugin plugin, String host, String username) {
        KodegenetUser user = null;

        if (plugin != null) {
            SubCategoryData sd = plugin.getSubCategory(host, "users", username);
            user = convertSubcategoryToUser(sd);

            if (user != null && user.getId() != null && user.getId().startsWith("users_")) {
                user.setId(user.getId().substring(6));
            }

            List<KodegenetOrder> orderList = new ArrayList<>();
            for (String orderId : sd.getListForKey("orders")) {
                if (orderId.startsWith("orders_")) {
                    orderId = orderId.substring(7);
                }


                KodegenetOrder ko = KodegenetOrderDao.getKodegentOrder(plugin, host, orderId);
                if (ko != null) {
                    orderList.add(ko);
                }
            }
            user.setOrders(orderList);

            List<EventParticipant> eventParticipantList = new ArrayList<>();
            for (String eventParticipantId : sd.getListForKey("eventParticipants")) {
                if (eventParticipantId.startsWith("eventParticipants_")) {
                    eventParticipantId = eventParticipantId.substring(18);
                }


                EventParticipant ep = KodegenetEventDao.getEventParticipant(plugin, host, eventParticipantId);
                if (ep != null) {
                    eventParticipantList.add(ep);
                }
            }
            user.setEventParticipants(eventParticipantList);

        }

        return user;
    }

    public static KodegenetUser getUserByUuid(StoragePlugin plugin, String host, String uuid) {
        KodegenetUser user = null;

        if (plugin != null) {
            KodegenetSession session = getSession(plugin, host, uuid);
            if (session != null && session.getUser() != null) {
                user = getUser(plugin, host, session.getUser());
            }
        }

        return user;
    }

    public static void persistUser(StoragePlugin plugin, String host, KodegenetUser user) {
        if (plugin != null && user != null && user.getId() != null && user.getId().length() > 4) {
            plugin.setSubCategory(host, "users", user.getId(), convertUsertoSubcategory(user));
        }
    }

    public static KodegenetSession getSession(StoragePlugin plugin, String host, String uuid) {
        KodegenetSession session = null;

        if (plugin != null && host != null && host.length() > 4 && uuid != null) {
            SubCategoryData sd = plugin.getSubCategory(host, "sessions", uuid);
            session = convertSubcatgoryToSession(sd);
        }

        return session;
    }

    public static void persistSession(StoragePlugin plugin, String host, KodegenetSession session) {
        if (plugin != null && session != null && session.getUuid() != null && session.getUuid().length() > 4) {
            plugin.setSubCategory(host, "sessions", session.getUuid(), convertSessionToSubcategory(session));
        }
    }

    private static KodegenetUser convertSubcategoryToUser(SubCategoryData sd) {
        KodegenetUser user = new KodegenetUser();

        if (sd != null) {
            user.setId(sd.getId());
            user.setGivenName(sd.getValueForKey("givenName"));
            user.setSurname(sd.getValueForKey("surname"));
            user.setAddress(sd.getValueForKey("streetAddress"));
            user.setPostalCode(sd.getValueForKey("postalCode"));
            user.setCity(sd.getValueForKey("city"));
            user.setPhone(sd.getValueForKey("phone"));
        }

        return user;
    }

    private static SubCategoryData convertUsertoSubcategory(KodegenetUser user) {
        SubCategoryData sd = new SubCategoryData();
        sd.setId(user.getId());
        sd.setValueForKey("givenName", user.getGivenName());
        sd.setValueForKey("surname", user.getSurname());
        sd.setValueForKey("streetAddress", user.getAddress());
        sd.setValueForKey("postalCode", user.getPostalCode());
        sd.setValueForKey("city", user.getCity());
        sd.setValueForKey("phone", user.getPhone());

        List<String> orderIds = new ArrayList<>();
        if (user.getOrders() != null) {
            for (KodegenetOrder order : user.getOrders()) {
                orderIds.add(order.getId());
            }

            sd.setListForKey("orders", orderIds);
        }

        List<String> eventParticipants = new ArrayList<>();
        if (user.getEventParticipants() != null) {
            for (EventParticipant ep : user.getEventParticipants()) {
                eventParticipants.add(ep.getId());
            }

            sd.setListForKey("eventParticipants", eventParticipants);
        }

        return sd;
    }

    private static KodegenetSession convertSubcatgoryToSession(SubCategoryData sd) {
        KodegenetSession session = new KodegenetSession();
        session.setUuid(sd.getId());

        if (session.getUuid().startsWith("sessions_")) {
            session.setUuid(session.getUuid().substring(9));
        }

        session.setCreated(sd.getLongValueForKey("created"));
        session.setLastAccessed(new Date().getTime());
        session.setAuthenticated(sd.getBooleanValueForKey("authenticated"));
        session.setAcceptedCookies(sd.getBooleanValueForKey("acceptedCookies"));
        session.setUser(sd.getValueForKey("user"));

        return session;
    }

    private static SubCategoryData convertSessionToSubcategory(KodegenetSession session) {
        SubCategoryData sd = new SubCategoryData();
        sd.setId(session.getUuid());
        sd.setValueForKey("created", session.getCreated());
        sd.setValueForKey("lastUsed", session.getLastAccessed());
        sd.setValueForKey("authenticated", session.isAuthenticated());
        sd.setValueForKey("acceptedCookies", session.isAcceptedCookies());
        sd.setValueForKey("user", session.getUser());

        return sd;
    }
}
