# About
This is my node.js execrise with node.js, ejs template, express framework, mongodb, mongodb-express. 
With this execrice, I learned some knowledge that like:

1. Build the docker's image with pre-install node.js and express framework.
2. Using dockers for mongodb and mongodb-express.
3. Build a basic blog-website with express framework and mongodb.

# Prerequisite

1. build a docker's image with npm and express framework

   `docker build nodejs -t nodejs/express`

2. bring up docker

   `docker-compose up -d`

# Run

1. go into docker container

   `docker exec -it nodejs-website bash`

3. run the project with different sources like:

   `cd /project && npm start`


   
