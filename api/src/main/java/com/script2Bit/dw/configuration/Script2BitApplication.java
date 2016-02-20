package com.script2Bit.dw.configuration;

import com.script2Bit.dw.resources.MailResource;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.federecio.dropwizard.swagger.SwaggerBundle;
import io.federecio.dropwizard.swagger.SwaggerBundleConfiguration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * Created by rajat on 2/20/16.
 */
public class Script2BitApplication extends Application<Script2BitConfiguration> {
  private static final Logger LOG = LoggerFactory.getLogger(Script2BitApplication.class);

  /**
   * This is where it all begins
   *
   * @param args
   */
  public static void main(String[] args) {
    try {
      new Script2BitApplication().run(args);
    } catch (Exception e) {
      LOG.error("Exception - {}", e);
    }
  }

  /**
   * Adds various bundles with configuration during bootstrapping of the
   * application
   *
   * @param bootstrap
   */
  @Override
  public void initialize(Bootstrap<Script2BitConfiguration> bootstrap) {
    bootstrap.addBundle(new SwaggerBundle<Script2BitConfiguration>() {
      @Override
      protected SwaggerBundleConfiguration getSwaggerBundleConfiguration(Script2BitConfiguration configuration) {
        return configuration.swaggerBundleConfiguration;
      }
    });
  }

  /**
   * The main thread for the application
   *
   * @param configuration
   * @param environment
   * @throws ClassNotFoundException
   */
  @Override
  public void run(Script2BitConfiguration configuration, Environment environment) throws ClassNotFoundException {
    environment.jersey().register(new MailResource(configuration.getMailConfiguration()));
  }
}
