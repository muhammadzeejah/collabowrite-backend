import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT === undefined ? 3000 : process.env.PORT;

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:" + PORT
      }
});

io.on('connection', (socket) => {
    socket.send('Hello World');

    socket.on('message', () => {
        console.log(message);
    });
});

httpServer.listen(PORT);
