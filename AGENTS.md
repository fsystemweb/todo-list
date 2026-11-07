# AGENTS.md

Task manager (create, rename, delete tasks) with an Angular frontend, a Dropwizard REST backend and MongoDB, run together with Docker Compose.

## Commands
- Start everything: `docker-compose up` (add `--build` after code changes), then open `http://localhost:4200`
- Frontend dev server: `npm start` in `frontend/` (install first with `npm install`)
- Frontend build: `npm run build` in `frontend/`
- Frontend unit tests: `npm test` in `frontend/` (Karma and Jasmine, needs Chrome)
- Frontend lint: `npm run lint` in `frontend/`; e2e: `npm run e2e` (Protractor)
- Backend tests: `mvn test` in `backend/`
- Backend build: `mvn clean install -DskipTests` in `backend/`; the jar is written to the Maven target directory

## Conventions
- `frontend/`: Angular 11.2, TypeScript 4.1, RxJS 6.6, npm (`package-lock.json`). Node 14 in the Dockerfile.
- `frontend/src/app/`: `components/` (small UI parts), `screens/home/`, `services/api-rest-task.service.ts` (HTTP calls), `models/`.
- Every component and service has a `.spec.ts` next to it.
- `backend/`: Dropwizard 2.0.25, Java source and target 1.8, built on JDK 11 in Docker, Maven.
- Backend code is under `backend/src/main/java/com/fsystem/apiresttask/`: `resources/ApiTaskResource.java` (the `/task` endpoints), `services/` (MongoDB access), `dto/`, `api/`, `health/`.
- Backend tests (JUnit 5, Mockito, AssertJ) are in `backend/src/test/java/`.
- `backend/configuration.yml` holds MongoDB host, port and collection. The Compose service is named `mongo-db`.
- `api-rest-task.postman_collection.json` documents the API behavior.
- Indentation is 2 spaces and single quotes in TypeScript (`.editorconfig`).

## Boundaries
- Always: add or update a spec in `frontend/src/app/` or a JUnit test in `backend/src/test/` with every behavior change.
- Ask first: adding a dependency, changing the `/task` API contract, upgrading Angular or Dropwizard.
- Never: commit secrets or read `.env` files.
- Never: run `docker container prune` or `docker rmi` from the README; they delete unrelated containers and images.
