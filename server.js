const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Allow requests from any origin
    },
});

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Test route to check server status
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle messages from clients
    socket.on('send_message', (message) => {
        console.log('Message received:', message);
        // Broadcast the message to all clients
        io.emit('receive_message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
