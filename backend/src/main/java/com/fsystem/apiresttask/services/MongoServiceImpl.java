package com.fsystem.apiresttask.services;

import com.fsystem.apiresttask.dto.Task;
import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

import static com.fsystem.apiresttask.util.Constants.*;

public class MongoServiceImpl implements MongoService {

    Gson gson;
    public MongoServiceImpl(Gson gson){
        this.gson = gson;
    }

    public void save(MongoCollection<Document> collection, Task task) {
        String json = gson.toJson(task);
        collection.insertOne(new Document(BasicDBObject.parse(json)));
    }

    public List<Task> getAll(MongoCollection<Document> collection) {
        return parseToListTask(collection.find().into(new ArrayList<Document>()));
    }

    private List<Task> parseToListTask(List<Document> listDocument){
        List<Task> taskList = new ArrayList<>();
        listDocument.forEach(element -> {
            Task task = new Task();
            task.setId(element.get(TASK_KEY1).toString());
            task.setTitle(element.get(TASK_KEY2).toString());
            task.setDate(element.get(TASK_KEY3).toString());

            taskList.add(task);
        });

        return taskList;
    }

    public void update(MongoCollection<Document> collection, Task task) {
        collection.updateOne(new Document(TASK_KEY1, new ObjectId(task.getId())),
                new Document("$set", new Document(TASK_KEY2, task.getTitle()).append(TASK_KEY3, task.getDate())));
    }

    public void delete(MongoCollection<Document> collection, String id) {
        collection.deleteOne(new Document(TASK_KEY1, new ObjectId(id)));
    }
}
