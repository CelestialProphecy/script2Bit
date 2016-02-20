package com.script2Bit.dw.resources;

import com.codahale.metrics.annotation.Timed;
import com.script2Bit.dw.Mail.Mail;
import com.script2Bit.dw.Mail.MailConfiguration;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.validation.constraints.NotNull;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.Properties;

/**
 * Created by rajat on 2/20/16.
 */

@Path("mail")
@Api("mail")
public class MailResource {
  private static final Logger LOG = LoggerFactory.getLogger(MailResource.class);

  private MailConfiguration mailConfiguration;

  public MailResource(MailConfiguration mailConfiguration) {
    this.mailConfiguration = mailConfiguration;
  }

  @POST
  @Timed
  @Path("/sendEmail")
  @ApiOperation(
          value = "Send Email to user with details",
          notes = "Send Email to user with details"
  )
  public String sendEmail(@NotNull @ApiParam Mail mail) throws Exception {
    Properties props = new Properties();
    props.put("mail.smtp.host", "smtp.gmail.com");
    props.put("mail.smtp.socketFactory.port", "465");
    props.put("mail.smtp.socketFactory.class",
            "javax.net.ssl.SSLSocketFactory");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.port", "465");

    Session session = Session.getDefaultInstance(props,
            new javax.mail.Authenticator() {
              protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(mailConfiguration.getUserName(), mailConfiguration.getPassword());
              }
            });
    try {
      Message message = new MimeMessage(session);
      message.setFrom(new InternetAddress(mailConfiguration.getUserName()));
      message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(mail.getTo()));
      message.setSubject(mail.getSubject());
      message.setText(mail.getMessage());
      Transport.send(message);
      LOG.debug("sendEmail - mail successfully sent");
      return "Successfully Sent";
    } catch (MessagingException e) {
      LOG.error("sendEmail - Cannot send mail due to server error");
      return "Cannot send mail due to server error.";
    }
  }
}
