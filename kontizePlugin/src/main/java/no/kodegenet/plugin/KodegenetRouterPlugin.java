package no.kodegenet.plugin;

import com.stripe.Stripe;
import io.netty.channel.ChannelHandler;
import no.haagensoftware.contentice.spi.RouterPlugin;
import no.kodegenet.handlers.*;
import no.kodegenet.instagram.InstagramPlugin;

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

        routeMap.put("/kodegenet/stripePayment", StripePaymentHandler.class);
        routeMap.put("/kodegenet/stripeToken", StripeTokenHandler.class);

        routeMap.put("/kodegenet/createSession", CreateSessionHandler.class);
        routeMap.put("/kodegenet/acceptCookies", AcceptCookiesHandler.class);
        routeMap.put("/kodegenet/shoppingCarts/{cartId}", CartHandler.class);
        routeMap.put("/kodegenet/cartProducts", CartProductHandler.class);
        routeMap.put("/kodegenet/cartProducts/{productId}", CartProductHandler.class);

        routeMap.put("/kodegenet/auth/login", KodegenetLoginHandler.class);
        routeMap.put("/kodegenet/auth/register", KodegenetRegisterUserHandler.class);
        routeMap.put("/kodegenet/auth/logout", KodegenetLogoutHandler.class);
        routeMap.put("/json/emailVerificationTokens", KodegenetVerifyEmailHandler.class);

        routeMap.put("/kodegenet/users", KodegenetUserHandler.class);
        routeMap.put("/kodegenet/users/{userId}", KodegenetUserHandler.class);

        routeMap.put("/kodegenet/events", EventHandler.class);
        routeMap.put("/kodegenet/events/{eventId}", EventHandler.class);

        routeMap.put("/kodegenet/eventParticipants", EventParticipantHandler.class);
        routeMap.put("/kodegenet/eventParticipants/{eventParticipantId}", EventParticipantHandler.class);

        routeMap.put("/kodegenet/orders", KodegenetOrderHandler.class);
        routeMap.put("/kodegenet/orders/{orderId}", KodegenetOrderHandler.class);

        routeMap.put("/kodegenet/instagramPhotos", KodegenetInstagramHandler.class);

        routeMap.put("/reveal.html", RevealHandler.class);

        plurals.put("oppgave", "oppgaver");

        Stripe.apiKey = System.getProperty("no.kodegenet.stripeKey");

        //Prefetch Instagram photos
        InstagramPlugin.getInstance().getInstagramPhotos();
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
