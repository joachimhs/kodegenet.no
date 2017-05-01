package no.kodegenet.plugin.dao;

import no.haagensoftware.contentice.data.SubCategoryData;
import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.kodegenet.handlers.data.KodegenetSmsRecipient;
import no.kodegenet.handlers.data.KodegenetSmses;

/**
 * Created by jhsmbp on 08/10/16.
 */
public class KodegenetSmsDao {

    public static void persistSmses(StoragePlugin plugin, String host, KodegenetSmses smses) {
        SubCategoryData sd = SubCategoryUtil.convertObjectToSubCateogory(smses);
        plugin.setSubCategory(host, "smses", smses.getId(), sd);
    }

    public static void persistSmsRecipient(StoragePlugin plugin, String host, KodegenetSmsRecipient recipient) {
        SubCategoryData sd = SubCategoryUtil.convertObjectToSubCateogory(recipient);
        plugin.setSubCategory(host, "smsRecipients", recipient.getId(), sd);
    }
}
