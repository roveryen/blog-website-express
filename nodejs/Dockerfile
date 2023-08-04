FROM ubuntu:latest

# Install all
RUN apt-get update
RUN apt install -y npm curl
RUN npm cache clean -f
RUN npm install -g semver
RUN npm install -g n
RUN n stable
RUN npm install -g express ejs mysql cors cookie-parser express-session express-generator