package com.script2Bit.dw.resources;

import com.script2Bit.dw.SMS.SMS;
import com.script2Bit.dw.SMS.SMSConfiguration;
import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.TwilioRestException;
import com.twilio.sdk.resource.factory.MessageFactory;
import com.twilio.sdk.resource.instance.Message;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiParam;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.validation.constraints.NotNull;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by rajat on 2/21/16.
 */
@Path("sms")
@Api("sms")
public class SMSResource {
  private static final Logger LOG = LoggerFactory.getLogger(SMSResource.class);
  private SMSConfiguration smsConfiguration;

  private SMSResource(SMSConfiguration smsConfiguration) {
    this.smsConfiguration = smsConfiguration;
  }
  @POST
  @Path("sendSMS")
  public String sendSMS(@NotNull @ApiParam SMS smsDetails)  {
    try {
      TwilioRestClient client = new TwilioRestClient(smsConfiguration.getAccountSid(), smsConfiguration.getAuthToken());

      List<NameValuePair> params = new ArrayList<NameValuePair>();

      params.add(new BasicNameValuePair("From", smsDetails.getFrom()));

      params.add(new BasicNameValuePair("To", smsDetails.getTo()));

      params.add(new BasicNameValuePair("Body", smsDetails.getMessage()));

      MessageFactory messageFactory = client.getAccount().getMessageFactory();
      Message message = messageFactory.create(params);

      LOG.debug("message sent successfully with id: {}", message.getSid());
      return "success";
    } catch(TwilioRestException e) {
      LOG.error("message couldn't be sent due to exception: {}", e);
      return "error";
    }
  }
}
