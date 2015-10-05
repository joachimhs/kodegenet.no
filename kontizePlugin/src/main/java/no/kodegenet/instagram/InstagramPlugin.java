package no.kodegenet.instagram;

import com.google.gson.Gson;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;

import java.io.IOException;

/**
 * Created by jhsmbp on 27/09/15.
 */
public class InstagramPlugin {
    private static final Logger logger = Logger.getLogger(InstagramPlugin.class.getName());

    private static InstagramPlugin instance = null;

    private String instaKey = null;
    private long lastFetched = 0;
    private InstagramObject instaObject = null;

    public InstagramPlugin() {
        instaObject = new InstagramObject();
        instaKey = System.getProperty("no.kodegenet.instaKey");
    }

    public static InstagramPlugin getInstance() {
        if (instance == null) {
            instance = new InstagramPlugin();
        }

        return instance;
    }

    public InstagramObject getInstagramPhotos() {
        boolean fetch = false;
        if (lastFetched == 0 || (System.currentTimeMillis() - lastFetched) > 300000) {
            fetch = true;
        }

        if (instaObject.getData().size() == 0) {
            fetch = true;
        }

        if (fetch && instaKey != null) {

            FetchInstagramThread fetchInstagramThread = new FetchInstagramThread(instaKey, instaObject);
            fetchInstagramThread.start();

            lastFetched = System.currentTimeMillis();
        }

        return instaObject;
    }

    public static void main(String[] args) {
        System.setProperty("no.kodegenet.instaKey", "1719481641.26b3adb.1ecbc3562ba14f28aa32475e424c818b");

        InstagramPlugin.getInstance().getInstagramPhotos();
    }
}
