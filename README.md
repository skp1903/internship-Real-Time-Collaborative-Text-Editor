# Real-time Text Editor

This is a real-time collaborative text editor built with Node.js and Socket.io.

## Live Application

You can access the real-time text editor by visiting the following link:

[Live Text Editor](https://laughing-tribble-977665jvjr6fp7rj-3000.app.github.dev/)
# Real-Time Text Application

This is a real-time text application built using Node.js, Express, and Socket.IO. The application demonstrates basic socket-based communication where clients can connect to the server and exchange messages in real-time. It was developed as part of an internship project to explore server-client interactions and real-time updates.

## How It Was Made

### Step 1: Set Up the Node.js Server

The first step in the project was setting up a Node.js server using `express` and `socket.io`. The server handles incoming requests and listens for real-time socket connections. A simple GET route (`/`) was created to test if the server is running:

```js
app.get('/', (req, res) => {
  res.send('Server is running!');
});

Step 2: Install Dependencies (Socket.io and Express)

To get the server running and handle real-time communication, I installed the required dependencies, express for routing and socket.io for managing real-time WebSocket connections. This was done using the following command:

npm install express socket.io

Step 3: Test the Server with a GET Route

After setting up the server, a basic test route was implemented to ensure the server was working as expected. When you access the root URL (/), the server responds with the message "Server is running!" to confirm that everything is functioning properly.
Step 4: Start the Server and Check for a Successful Connection

Once the server was set up, I started it by running:

node server.js

This opened the server on localhost:3000, and the server was able to log the connection of new users via WebSocket, like this:

A user connected: [socket id]

Step 5: Deploy the App to GitHub Codespaces and Get a Forwarded Address

After developing the application locally, I deployed it to GitHub Codespaces. This allowed me to run the application in an isolated environment with access to a publicly available forwarded address. The app was accessible via the following URL:

Live App
