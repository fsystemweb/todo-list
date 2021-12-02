# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.17.0 as build

RUN mkdir /home/app && chown node:node /home/app
WORKDIR /home/app
RUN npm install -g @angular/cli
# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /home/app/node_modules/.bin:$PATH
# copy in our source code last, as it changes the most
COPY --chown=node:node . .
CMD ng serve --host 0.0.0.0
