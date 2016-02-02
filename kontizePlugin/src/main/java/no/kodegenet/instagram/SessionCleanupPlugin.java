package no.kodegenet.instagram;

import no.haagensoftware.contentice.spi.StoragePlugin;

import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * Created by jhsmbp on 16/11/15.
 */
public class SessionCleanupPlugin {
    private static SessionCleanupPlugin instance = null;
    private StoragePlugin storagePlugin;
    private String host;

    private ScheduledThreadPoolExecutor threadPool = null;

    private SessionCleanupPlugin(String host, StoragePlugin storagePlugin) {
        this.storagePlugin = storagePlugin;
        this.host = host;
        threadPool = new ScheduledThreadPoolExecutor(1);

        threadPool.scheduleAtFixedRate(new SessionCleanupThread(host, storagePlugin), 0, 15, TimeUnit.MINUTES);
    }

    public static SessionCleanupPlugin getInstance(String host, StoragePlugin storagePlugin) {
        if (instance == null) {
            instance = new SessionCleanupPlugin(host, storagePlugin);
        }

        return instance;
    }
}
