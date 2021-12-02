# TodoList

# Docker

- Create image
  `docker build -t fsystem/todo-list:latest .`
- Check image exist
  `docker image ls`
- Run image
  `docker run -d -p 8080:80 fsystem/todo-list:latest`
- Check container running
  `docker ps`

Visit http://localhost:8080
