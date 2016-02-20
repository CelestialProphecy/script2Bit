package com.script2Bit.dw.configuration;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.script2Bit.dw.Mail.MailConfiguration;
import com.script2Bit.dw.SMS.SMSConfiguration;
import io.dropwizard.Configuration;
import io.federecio.dropwizard.swagger.SwaggerBundleConfiguration;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * Created by rajat on 2/20/16.
 */
public class Script2BitConfiguration extends Configuration {

  @JsonProperty("mail")
  public MailConfiguration mailConfiguration;

  @JsonProperty("swagger")
  public SwaggerBundleConfiguration swaggerBundleConfiguration;

  @JsonProperty("sms")
  public SMSConfiguration smsConfiguration;

  public MailConfiguration getMailConfiguration() {
    return  mailConfiguration;
  }

  public SMSConfiguration getSmsConfiguration() {
    return  smsConfiguration;
  }

}

