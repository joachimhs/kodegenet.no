package no.kodegenet.plugin.dao;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.kodegenet.handlers.data.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by jhsmbp on 04/06/15.
 */
public class KodegenetEventDao {
    public static void storeEventParticipant(StoragePlugin plugin, String host, EventParticipant eventParticipant) {
        if (plugin != null) {
            SubCategoryData eventSd = SubCategoryUtil.convertObjectToSubCateogory(eventParticipant);
            plugin.setSubCategory(host, "eventParticipants", eventParticipant.getId(), eventSd);
        }
    }

    public static EventParticipant getEventParticipant(StoragePlugin plugin, String host, String id) {
        EventParticipant eventParticipant = null;

        SubCategoryData epSd = plugin.getSubCategory(host, "eventParticipants", id);

        if (epSd != null) {
            JsonObject jsonObject = SubCategoryUtil.convertSubcategoryToJsonObject(epSd);
            eventParticipant = new Gson().fromJson(jsonObject.toString(), EventParticipant.class);
        }

        if (eventParticipant.getId().startsWith("eventParticipants_")) {
            eventParticipant.setId(eventParticipant.getId().substring(18));
        }


        return eventParticipant;
    }

    public static void storeEvent(StoragePlugin plugin, String host, KodegenetEvent event) {
        if (plugin != null) {
            SubCategoryData eventSd = SubCategoryUtil.convertObjectToSubCateogory(event);
            plugin.setSubCategory(host, "events", event.getId(), eventSd);
        }
    }

    public static KodegenetEvent getEvent(StoragePlugin plugin, String host, String id) {
        KodegenetEvent event = null;

        SubCategoryData eventSd = plugin.getSubCategory(host, "events", id);

        if (eventSd != null) {
            JsonObject jsonObject = SubCategoryUtil.convertSubcategoryToJsonObject(eventSd);
            event = new Gson().fromJson(jsonObject.toString(), KodegenetEvent.class);
        }

        if (event.getId().startsWith("events_")) {
            event.setId(event.getId().substring(7));
        }

        if (event.getCapacity() != null) {
            event.setRemainingSpots(event.getCapacity() - event.getEventParticipants().size());
        }

        return event;
    }

    public static List<KodegenetEvent> getEvents(StoragePlugin plugin, String host) {
        List<KodegenetEvent> events = new ArrayList<>();

        List<SubCategoryData> eventSdList = plugin.getSubCategories(host, "events");

        for (SubCategoryData eventSd : eventSdList)  {
            JsonObject jsonObject = SubCategoryUtil.convertSubcategoryToJsonObject(eventSd);
            KodegenetEvent event = new Gson().fromJson(jsonObject.toString(), KodegenetEvent.class);

            if (event.getId().startsWith("events_")) {
                event.setId(event.getId().substring(7));
            }

            if (event.getCapacity() != null) {
                int taken = event.getEventParticipants() != null ? event.getEventParticipants().size() : 0;

                event.setRemainingSpots(event.getCapacity() - taken);
            }

            events.add(event);
        }

        return events;
    }
}
