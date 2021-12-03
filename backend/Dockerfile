FROM adoptopenjdk/openjdk11:ubi

WORKDIR /var/api-rest-task

ADD target/api-rest-task-1.0.jar /var/api-rest-task/api-rest-task.jar
ADD configuration.yml /var/api-rest-task/configuration.yml

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "api-rest-task.jar", "server", "configuration.yml"]
