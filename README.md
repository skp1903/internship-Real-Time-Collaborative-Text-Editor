# Real-time Text Editor

This is a real-time collaborative text editor built with Node.js and Socket.io.

## Live Application

You can access the real-time text editor by visiting the following link:

[Live Text Editor](https://laughing-tribble-977665jvjr6fp7rj-3000.app.github.dev/)




# Real-Time Text Application

This is a real-time text application built using Node.js, Express, and Socket.IO. The application demonstrates basic socket-based communication where clients can connect to the server and exchange messages in real-time. It was developed as part of an internship project to explore server-client interactions and real-time updates.

## How It Was Made

### Step 1: Set Up the Node.js Server
The first step was setting up a basic Node.js server using Express and Socket.IO. This server handles incoming requests and listens for real-time socket connections. A simple GET route (`/`) was created to test if the server is running.

- **Code for basic GET route**:

  ```js
  app.get('/', (req, res) => {
    res.send('Server is running!');
  });

Step 2: Install Dependencies (Socket.IO and Express)

To get the server running and manage real-time communication, the necessary dependencies—express for routing and socket.io for handling WebSocket connections—were installed. This was done via the following command:

    Installation command:

    npm install express socket.io

Step 3: Test the Server with a GET Route

Once the dependencies were installed, a basic test route was implemented to ensure the server was working as expected. When accessing the root URL (/), the server would respond with the message "Server is running!" confirming that everything was functional.

    Test route code:

    app.get('/', (req, res) => {
      res.send('Server is running!');
    });

Step 4: Start the Server and Check for Successful Connection

After setting up the server and the routes, the next step was to start the server. Running the following command started the server, making it available at localhost:3000. When users connected to the server via Socket.IO, the server logged each new connection:

    Start the server command:

node server.js

Sample connection log:

    A user connected: [socket id]

Step 5: Deploy the App to GitHub Codespaces and Get a Forwarded Address

Once the development was complete, the next step was to deploy the application to GitHub Codespaces, which provides a remote development environment. This enabled the app to run in an isolated cloud environment and made it accessible to others via a public URL:

    Live App URL: https://laughing-tribble-977665jvjr6fp7rj-3000.app.github.dev/



https://github.com/user-attachments/assets/f4ac258b-85c8-415c-a18e-034f8ade77bb





