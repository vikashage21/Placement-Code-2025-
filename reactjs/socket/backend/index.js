import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors'; // fix typo: "cros" -> "cors"

const app = express();

// Enable CORS for frontend
app.use(cors({
    origin: 'http://localhost:5173', // Vite dev server default port
    methods: ['GET', 'POST'],
    credentials: true
}));

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
});


// listing some event

io.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`)

    socket.on('send_message', (data) => {
        socket.broadcast.emit('receive_message', data)
    })
})


// Start server
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
