FROM adoptopenjdk/maven-openjdk11

WORKDIR /var/api-rest-task

ADD pom.xml /api-rest-task
RUN mvn verify clean --fail-never

# Image layer: with the application
COPY . ./
RUN mvn -v
RUN mvn clean install -DskipTests

RUN mv target/api-rest-task-1.0.jar ./api-rest-task.jar
ADD configuration.yml ./configuration.yml

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "api-rest-task.jar", "server", "configuration.yml"]
