package no.kodegenet.plugin;

import com.google.gson.Gson;
import org.apache.http.Header;
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
 * Created by jhsmbp on 18/10/15.
 */
public class KodegenetBringPlugin {
    private static final Logger logger = Logger.getLogger(KodegenetBringPlugin.class.getName());
    private static KodegenetBringPlugin instance = null;

    private KodegenetBringPlugin() {
    }

    public static KodegenetBringPlugin getInstance() {
        if (instance == null) {
            instance = new KodegenetBringPlugin();
        }

        return instance;
    }

    public BringProduct getPriceForServicepakke(BringInput input) {
        return this.getPriceForServicepakke(input.getFraPostnummer(), input.getTilPostnummer(), input.getVektGram(), input.getLengdeCm(), input.getBreddeCm(), input.getHoydeCm());
    }

    public BringProduct getPriceForServicepakke(Integer fraPostnummer, Integer tilPostnummer, Integer vektGram, Integer lengdeCm, Integer breddeCm, Integer hoydeCm) {
        BringProduct bringProduct = null;

        String tilPostnummerString = tilPostnummer.toString();
        if (tilPostnummer < 999) {
            tilPostnummerString = "0" + tilPostnummerString;
        }

        if (fraPostnummer != null && tilPostnummer != null && tilPostnummerString.length() == 4 && vektGram != null && lengdeCm != null && hoydeCm != null && breddeCm != null) {
            StringBuilder url = new StringBuilder();
            url.append("https://api.bring.com/shippingguide/products/SERVICEPAKKE/price.json?clientUrl=insertYourClientUrlHere");
            url.append("&from=").append(fraPostnummer.toString());
            url.append("&to=").append(tilPostnummerString);
            url.append("&weightInGrams=").append(vektGram.toString());
            url.append("&length=").append(lengdeCm.toString());
            url.append("&width=").append(breddeCm.toString());
            url.append("&height=").append(hoydeCm.toString());
            url.append("&additional=evarsling");

            String json = fetchJsonContent(url.toString());

            if (json.startsWith("{") && json.endsWith("}")) {
                BringReturn bringReturn = new Gson().fromJson(json, BringReturn.class);
                if (bringReturn != null) {
                    bringProduct = bringReturn.getProduct();
                }
            }
        }

        return bringProduct;
    }

    private String fetchJsonContent(String url) {
        String json = null;

        logger.info("FETCHING FROM: " + url);
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {

            HttpGet httpGet = new HttpGet(url);

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
