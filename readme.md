# Task managemer

- Start application
  `docker-compose up`

- Visit -> http://localhost:4200

# Clean docker workspace

- Delete containers
  `docker container prune`
- Delete images
  `docker rmi $(docker images -q)`

## How to use

- Create a new task -> click on the button "New"
- Update task -> double click over the task and type the new title of the task, after that double click again to finish the update mode.
- Delete task -> select the task/s that you want to remove by clicking on the checkbox after that click on the button "Delete".

## Backend

- Check postman collection in to understand api behaviour:
  `api-rest-task.postman_collection.json`
