package com.fsystem.apiresttask.services;

import com.fsystem.apiresttask.dto.Task;
import com.google.gson.Gson;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static com.fsystem.apiresttask.util.Constants.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class MongoServiceTest {
    private static final Gson gson = new Gson();
    private static final MongoCollection collection = mock(MongoCollection.class);

    private static final MongoServiceImpl mongoService = new MongoServiceImpl(gson);

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
    void save(){
        doNothing().when(collection).insertOne(any());

        mongoService.save(collection, task);

        verify(collection).insertOne(any());
    }

    @Test
    void update(){
        when(collection.updateOne(any(Document.class), any(Document.class))).thenReturn(null);

        mongoService.update(collection, task);

        verify(collection).updateOne(any(Document.class), any(Document.class));
    }

    @Test
    void getAll(){
        List<Document> documentList = new ArrayList<>();

        Document doc = new Document(TASK_KEY1, task.getId())
                .append(TASK_KEY2, task.getTitle()).append(TASK_KEY3, task.getDate());

        documentList.add(doc);

        FindIterable iterable = mock(FindIterable.class);

        when(collection.find()).thenReturn(iterable);

        when(iterable.into(any())).thenReturn(documentList);

        List<Task> taskList = mongoService.getAll(collection);

        verify(collection).find();

        assertThat(taskList.get(0).getId()).isEqualTo(task.getId());
        assertThat(taskList.get(0).getDate()).isEqualTo(task.getDate());
        assertThat(taskList.get(0).getTitle()).isEqualTo(task.getTitle());
        assertThat(taskList.size()).isEqualTo(1);
    }
}
