package com.fsystem.apiresttask;


import com.fsystem.apiresttask.health.MongoDBHealthCheck;
import com.fsystem.apiresttask.resources.ApiTaskResource;
import com.fsystem.apiresttask.services.MongoServiceImpl;
import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import io.dropwizard.Application;
import io.dropwizard.setup.Environment;
import org.bson.Document;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

public class ApiTaskApplication extends Application<ApiTaskApplicationConfiguration> {
  private static final Logger logger = LoggerFactory.getLogger(ApiTaskApplicationConfiguration.class);

  public static void main(String[] args) throws Exception {
    new ApiTaskApplication().run(args);
  }

  @Override
  public String getName() {
    return "Api Rest Task";
  }

  private void addCors(Environment env) {
    // Enable CORS headers
    final FilterRegistration.Dynamic cors =
      env.servlets().addFilter("CORS", CrossOriginFilter.class);

    // Configure CORS parameters
    cors.setInitParameter("allowedOrigins", "*");
    cors.setInitParameter("allowedHeaders", "X-Requested-With,Content-Type,Accept,Origin");
    cors.setInitParameter("allowedMethods", "OPTIONS,GET,PUT,POST,DELETE,HEAD");

    // Add URL mapping
    cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
  }

  @Override
  public void run(ApiTaskApplicationConfiguration config, Environment env) {
    MongoClient mongoClient = new MongoClient(config.getMongoHost(), config.getMongoPort());
    MongoManaged mongoManaged = new MongoManaged(mongoClient);
    env.lifecycle().manage(mongoManaged);
    MongoDatabase db = mongoClient.getDatabase(config.getMongoDB());
    MongoCollection<Document> collection = db.getCollection(config.getCollectionName());
    logger.info("Registering RESTful API resources");
    env.jersey().register(new ApiTaskResource(collection, new MongoServiceImpl(new Gson())));
    env.healthChecks().register("MongoDBHealthCheck",
      new MongoDBHealthCheck(mongoClient));

    this.addCors(env);

  }
}
