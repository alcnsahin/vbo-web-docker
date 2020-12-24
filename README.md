# VBO Web Application

This is a simple node.js application to Dockerize.

#### Before running the app manually you need to install all the required npm packages:
`npm install`<br>

#### Run the app
`node main.js`

#### Run as Docker container
`docker build -t vbo-web-docker:latest .`<br>
`docker run -d -p 11130:3000 --name vbo-web-docker vbo-web-docker:latest`