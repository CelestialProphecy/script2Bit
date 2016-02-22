package com.script2Bit.dw.filters;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import java.io.IOException;

/**
 * Created by rajat on 2/22/16.
 */
public class ResponseFilter implements ContainerResponseFilter {

  private static final Logger LOG = LoggerFactory.getLogger(ResponseFilter.class);

  public ResponseFilter() {
  }

  public void filter(ContainerRequestContext request, ContainerResponseContext response) throws IOException {
    response.getHeaders().add("Access-Control-Allow-Credentials", "*");
    response.getHeaders().add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token, If-Modified-Since");
    response.getHeaders().add("Access-Control-Allow-Origin", "*");
    response.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  }
}