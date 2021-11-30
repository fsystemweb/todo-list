package com.fsystem.apiresttask.resources;

import com.codahale.metrics.annotation.Timed;
import com.fsystem.apiresttask.api.TaskRequest;
import com.fsystem.apiresttask.dto.Task;
import com.fsystem.apiresttask.services.MongoService;
import com.mongodb.client.MongoCollection;
import com.wordnik.swagger.annotations.Api;
import org.bson.Document;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/task")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Api(value = "Task", description = "Api REST to management Tasks")
public class ApiTaskResource {

    private MongoCollection<Document> collection;
    private MongoService mongoService;

    public ApiTaskResource(MongoCollection<Document> collection, MongoService mongoService) {
        this.collection = collection;
        this.mongoService = mongoService;
    }

    @POST
    @Timed
    public Response createTask(@NotNull @Valid final TaskRequest taskRequest) {
        Task task = new Task(taskRequest.getTitle());
        mongoService.save(collection, task);
        Map<String, String> response = new HashMap<String, String>();
        response.put("message", "Task created successfully");
        return Response.ok(response).build();
    }

    @GET
    @Timed
    public Response getTasks() {
        List<Task> tasks = mongoService.getAll(collection);
        return Response.ok(tasks).build();
    }

    @PUT
    @Timed
    public Response updateTask(@NotNull @Valid final Task task) {
        mongoService.update(collection, task);
        Map<String, String> response = new HashMap<String, String>();
        response.put("message", "Task with id: " + task.getId() + " updated successfully");
        return Response.ok(response).build();
    }

    @DELETE
    @Timed
    @Path("{id}")
    public Response deleteEmployee(@NotNull  @PathParam("id") final String id) {
        mongoService.delete(collection, id);
        Map<String, String> response = new HashMap<String, String>();
        response.put("message", "Task with id: " + id + " deleted successfully");
        return Response.ok(response).build();
    }

}
