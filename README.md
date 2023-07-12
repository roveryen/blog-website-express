# About
This is my python execrise with selenium and paramiko libraries. 
With this execrice, I learned some knowledge that like:

1. Build the docker image of selenium for arm64 architecture.
2. Utilize the selenium library to imitate human behaviors and scraping the infomation that I need from multiple websites.
3. Store the extracted infomation to json files.
4. Upload the json files to sftp by utilizing paramiko library.

# Prerequisite

1. build a docker image with nodejs and express framework

   `docker build nodejs -t nodejs/express`

2. bring up docker

   `docker-compose up -d`

# Run

1. go into docker container

   `docker exec -it nodejs-website bash`

3. run the project with different sources like:

   `cd /project && npm start`


   
