package com.fsystem.apiresttask.resources;


import com.fsystem.apiresttask.dto.Task;
import com.fsystem.apiresttask.services.MongoService;
import com.mongodb.client.MongoCollection;
import io.dropwizard.testing.junit5.DropwizardExtensionsSupport;
import io.dropwizard.testing.junit5.ResourceExtension;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;


@ExtendWith(DropwizardExtensionsSupport.class)
public class ApiTaskResourceTest {
    private static final MongoCollection collection = mock(MongoCollection.class);
    private static final MongoService mongoService = mock(MongoService.class);

    public static final ResourceExtension RESOURCES = ResourceExtension.builder()
            .addResource(new ApiTaskResource(collection, mongoService))
            .build();

    private ArgumentCaptor<Task> taskArgumentCaptor = ArgumentCaptor.forClass(Task.class);
    private Task task;

    @BeforeEach
    void setUp() {
        task = new Task();
        task.setId("61a3dbc1503fcb2695a26c59");
        task.setTitle("test title");
        task.setDate("2021-11-28");
    }

    @AfterEach
    void tearDown() {
        reset(collection);
    }

    @Test
    void save() {
        final Response response = RESOURCES.target("/task")
                .request(MediaType.APPLICATION_JSON_TYPE)
                .post(Entity.entity(task, MediaType.APPLICATION_JSON_TYPE));

        doNothing().when(mongoService).save(collection, task);

        assertThat(response.getStatusInfo()).isEqualTo(Response.Status.OK);
        verify(mongoService).save(any(), taskArgumentCaptor.capture());
        assertThat(taskArgumentCaptor.getValue().getTitle()).isEqualTo(task.getTitle());
    }

    @Test
    void update() {
        final Response response = RESOURCES.target("/task")
                .request(MediaType.APPLICATION_JSON_TYPE)
                .put(Entity.entity(task, MediaType.APPLICATION_JSON_TYPE));

        doNothing().when(mongoService).update(collection, task);

        assertThat(response.getStatusInfo()).isEqualTo(Response.Status.OK);
        verify(mongoService).update(any(), taskArgumentCaptor.capture());
        assertThat(taskArgumentCaptor.getValue().getId()).isEqualTo(task.getId());
        assertThat(taskArgumentCaptor.getValue().getDate()).isEqualTo(task.getDate());
        assertThat(taskArgumentCaptor.getValue().getTitle()).isEqualTo(task.getTitle());
    }

    @Test
    public void delete() throws Exception {
        doNothing().when(mongoService).delete(collection, "61a3dbc1503fcb2695a26c59");

        final Response response = RESOURCES.target("/task/61a3dbc1503fcb2695a26c59")
                .request()
                .delete();

        verify(mongoService).delete(collection, "61a3dbc1503fcb2695a26c59");
    }

    @Test
    void getAll() throws Exception {
        final List<Task> taskList = Collections.singletonList(task);
        when(mongoService.getAll(collection)).thenReturn(taskList);

        final List<Task> response = RESOURCES.target("/task")
                .request().get(new GenericType<List<Task>>() {});

        verify(mongoService).getAll(collection);
        assertThat(response.get(0).getId()).isEqualTo(taskList.get(0).getId());
        assertThat(response.get(0).getDate()).isEqualTo(taskList.get(0).getDate());
        assertThat(response.get(0).getTitle()).isEqualTo(taskList.get(0).getTitle());
        assertThat(response.size()).isEqualTo(taskList.size());
    }

}
