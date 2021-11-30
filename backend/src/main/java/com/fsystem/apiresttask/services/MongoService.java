package com.fsystem.apiresttask.services;

import com.fsystem.apiresttask.dto.Task;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

import java.util.List;

public interface MongoService {
    public void save(MongoCollection<Document> collection, Task task);
    public void delete(MongoCollection<Document> collection, String id);
    public List<Task> getAll(MongoCollection<Document> collection);
    public void update(MongoCollection<Document> collection, Task task);
}
