package no.kodegenet.plugin;

import io.netty.channel.ChannelHandler;
import no.haagensoftware.contentice.handler.FileServerHandler;
import no.haagensoftware.contentice.spi.RouterPlugin;
import no.kodegenet.handlers.ChaptersHandler;
import no.kodegenet.handlers.CoursesHandler;
import no.kodegenet.handlers.OppgaverHandler;
import no.kodegenet.handlers.RevealHandler;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by jhsmbp on 2/6/14.
 */
public class KodegenetRouterPlugin extends RouterPlugin {

    LinkedHashMap<String, Class<? extends ChannelHandler>> routeMap;
    Map<String, String> plurals;

    public KodegenetRouterPlugin() {
        this.routeMap = new LinkedHashMap<>();
        this.plurals = new LinkedHashMap<>();

        routeMap.put("/json/courses", CoursesHandler.class);
        routeMap.put("/json/chapters", ChaptersHandler.class);
        routeMap.put("/json/chapters/{chapter}", ChaptersHandler.class);
        routeMap.put("/json/oppgaver", OppgaverHandler.class);
        routeMap.put("/json/oppgaver/{oppgave}", OppgaverHandler.class);

        routeMap.put("/json/subchapters", OppgaverHandler.class);
        routeMap.put("/json/subchapters/{subchapter}", OppgaverHandler.class);

        routeMap.put("/json/updates", OppgaverHandler.class);
        routeMap.put("/json/updated/{update}", OppgaverHandler.class);

        routeMap.put("/reveal.html", RevealHandler.class);

        plurals.put("oppgave", "oppgaver");
    }

    @Override
    public List<String> getPluginDependencies() {
        return new ArrayList<>();
    }

    @Override
    public String getPluginName() {
        return "KodegenetRouterPlugin";
    }

    @Override
    public LinkedHashMap<String,Class<? extends ChannelHandler>> getRoutes() {
        return routeMap;
    }

    @Override
    public Map<String, String> getPlurals() {
        return plurals;
    }
}
