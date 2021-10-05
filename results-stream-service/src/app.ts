import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

    //connection is up, let's add a simple simple event
    ws.on('message', function incoming(data) {
      const message = data.toString();
      console.log('received: %s', message);
      if(message === 'PING'){
        ws.send('PONG');
      }
      //send all data to every client connected to the server
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a Finice websocket server');
});

//start our server
server.listen(process.env.PORT || 5000, () => {
    console.log(`Server started `);
});