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
 * Created by jhsmbp on 02/10/15.
 */
public class FetchInstagramThread extends Thread {
    private static final Logger logger = Logger.getLogger(FetchInstagramThread.class.getName());

    private String instaKey = null;
    private InstagramObject instaObject = null;
    private final String instaFromUrl = "https://api.instagram.com/v1/users/1719481641/media/recent/?access_token={accessToken}";
    private final String instaTaggedUrl = "https://api.instagram.com/v1/tags/kodegenet/media/recent?access_token={accessToken}";
    private final String instaLikedUrl = "https://api.instagram.com/v1/users/self/media/liked/?access_token={accessToken}";

    public FetchInstagramThread(String instaKey, InstagramObject instaObject) {
        super();
        this.instaKey = instaKey;
        this.instaObject = instaObject;
    }

    @Override
    public void run() {
        String fromJson = fetchJsonContent(instaFromUrl.replace("{accessToken}", instaKey));
        String taggedJson = fetchJsonContent(instaTaggedUrl.replace("{accessToken}", instaKey));
        String likedJosn = fetchJsonContent(instaLikedUrl.replace("{accessToken}", instaKey));

        logger.info("FROM: ");
        logger.info(fromJson);

        logger.info("\n\nTAGGED: ");
        logger.info(taggedJson);

        InstagramObject newinstaObject = new Gson().fromJson(fromJson, InstagramObject.class);
        InstagramObject taggedObject = new Gson().fromJson(taggedJson, InstagramObject.class);

        if (newinstaObject != null && newinstaObject.getData() != null &&
                taggedObject != null && taggedObject.getData() != null && taggedObject.getData().size() > 0) {
            instaObject.getData().addAll(taggedObject.getData());
        }

        InstagramObject likedObject = new Gson().fromJson(likedJosn, InstagramObject.class);
        if (newinstaObject != null && newinstaObject.getData() != null &&
                likedObject != null && likedObject.getData() != null && likedObject.getData().size() > 0) {
            newinstaObject.getData().addAll(likedObject.getData());
        }

        instaObject.getData().clear();
        if (newinstaObject != null) {
            //Might be null if Instagram cannot be reached..
            instaObject.getData().addAll(newinstaObject.getData());
        }
    }

    private String fetchJsonContent(String url) {
        String json = null;

        logger.info("FETCHING FROM: " + url);

        HttpGet httpGet = new HttpGet(url);
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {
            HttpResponse response = httpclient.execute(httpGet);

            HttpEntity entity = response.getEntity();
            json = EntityUtils.toString(entity);
            logger.info(json);
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // When HttpClient instance is no longer needed,
            // shut down the connection manager to ensure
            // immediate deallocation of all system resources
            httpclient.getConnectionManager().shutdown();
        }

        return json;
    }
}
