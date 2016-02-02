package no.kodegenet.email;

import no.haagensoftware.contentice.spi.StoragePlugin;
import no.haagensoftware.contentice.util.SubCategoryUtil;
import no.kodegenet.handlers.data.KodegenetEmail;
import org.apache.log4j.Logger;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

/**
 * Created by jhsmbp on 19/02/14.
 */
public class KodegenetEpostThread implements Runnable {
    private static final Logger logger = Logger.getLogger(KodegenetEpostThread.class.getName());

    private StoragePlugin storagePlugin;
    private String host;
    private KodegenetEmail email;

    public KodegenetEpostThread(String host, KodegenetEmail email, StoragePlugin storagePlugin) {
        this.host = host;
        this.storagePlugin = storagePlugin;
        this.email = email;
    }

    @Override
    public void run() {
        if (email != null) {
            if (sendEmailWithSSL("Takk for din Kodegenet.no ordre!", email.getMessage(), email.getEpost())) {
                //TODO: move to emailsSent
                storagePlugin.deleteSubcategory(host, "emailsNotSent", email.getId());
                storagePlugin.setSubCategory(host, "emailsSent", email.getId(), SubCategoryUtil.convertObjectToSubCateogory(email));
            }
        }
    }

    private boolean sendEmailWithSSL(String emailSubject, String emailMessage, String recipient) {
        boolean success = true;

        String host = System.getProperty("no.kodegenet.smtp.host");
        int port = 25;
        final String username = System.getProperty("no.kodegenet.smtp.user");
        final String password = System.getProperty("no.kodegenet.smtp.password");


        Properties props = new Properties();
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.socketFactory.port", "" + 465);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "" + 465);


        logger.info("Creating email session");
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            logger.info("Creating transport");

            Transport.send(buildMessage(session, recipient, emailSubject, emailMessage));
        } catch (MessagingException e) {
            e.printStackTrace();
            success = false;
        }

        logger.info("Email send success: " + success);

        return success;
    }

    private Message buildMessage(Session session, String recipient, String emailSubject, String emailMessage) throws AddressException, MessagingException {
        MimeMessage message = new MimeMessage(session);
        message.setHeader("Content-Type", "text/plain");
        message.setFrom(new InternetAddress("post@kodegenet.no"));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient + ", post@kodegenet.no"));
        message.setSubject(emailSubject);
        message.setText(emailMessage);
        message.setContent(emailMessage, "text/html; charset=utf-8");

        return message;
    }
}
