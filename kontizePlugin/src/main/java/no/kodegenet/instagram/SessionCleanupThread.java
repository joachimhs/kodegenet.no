package no.kodegenet.instagram;

import com.google.gson.JsonElement;
import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import org.apache.log4j.Logger;
import java.util.List;

/**
 * Created by jhsmbp on 16/11/15.
 */
public class SessionCleanupThread extends Thread {
    private static final Logger logger = Logger.getLogger(SessionCleanupThread.class.getName());
    private StoragePlugin storagePlugin;
    private String host;

    public SessionCleanupThread(String host, StoragePlugin storagePlugin) {
        this.storagePlugin = storagePlugin;
        this.host = host;
    }

    @Override
    public void run() {
        super.run();

        logger.info("Starting session cleanup!");
        int deletedSessions = 0;

        List<SubCategoryData> sessionsSdList = storagePlugin.getSubCategories(host, "sessions");
        for (SubCategoryData session : sessionsSdList) {
            JsonElement lastUsedElement = session.getKeyMap().get("lastUsed");
            JsonElement userElement = session.getKeyMap().get("user");

            Long twoDaysAgo = System.currentTimeMillis() - 172800000l;

            //If session has now user
            if (userElement == null || userElement.getAsString() == null || userElement.getAsString().length() == 0) {
                if (lastUsedElement == null || lastUsedElement.getAsLong() < twoDaysAgo) {
                    //session is old, or last used is missing
                    storagePlugin.deleteSubcategory(host, "sessions", session.getName());
                    deletedSessions++;
                }
            }
        }

        int deletedCarts = 0;
        List<SubCategoryData> cartSdList = storagePlugin.getSubCategories(host, "shoppingCarts");
        for (SubCategoryData cart : cartSdList) {
            if (cart.getId().startsWith("shoppingCarts_")) {
                cart.setId(cart.getId().substring(14));
            }

            JsonElement sessionElement = cart.getKeyMap().get("session");

            if (sessionElement == null || sessionElement.getAsString() == null || sessionElement.getAsString().length() == 0) {
                storagePlugin.deleteSubcategory(host, "shoppingCarts", cart.getId());
                deletedCarts++;
            } else if (sessionElement != null && sessionElement.getAsString().length() > 0) {
                SubCategoryData sessionSd = storagePlugin.getSubCategory(host, "sessions", sessionElement.getAsString());

                if (sessionSd == null) {
                    storagePlugin.deleteSubcategory(host, "shoppingCarts", cart.getId());
                    deletedCarts++;
                }
            }
        }

        logger.info("Session cleanup done. Sessions deleted: " + deletedSessions + ". Carts deleted: " + deletedCarts);
    }
}
