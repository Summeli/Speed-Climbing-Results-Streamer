# Speed-Climbing-Results-Streamer
 Streams speed climbing results into result office / TV. The server is a simple node / express server, which will server static files for the webapp, and it will handle the websockets to stream time information for the clients.

 #### Why no React???
React was a bit too slow for the nicer "clock time" effect. It seems to be much faster and better with this simpel jquery client. 

#### Other clients
For Media streams we should use a native Qt Client, since it's much more realiable. 

# Docker
Building the image
`docker build -t finicetimestreamer:v1 .`


# Local dev
start node with 
`yarn start`