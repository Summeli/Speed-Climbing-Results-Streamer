# Speed-Climbing-Results-Streamer
 Streams speed climbing results into result office / TV. The server is a simple node / express server, which will server static files for the webapp, and it will handle the websockets to stream time information for the clients.

 #### Why no React???
React was a bit too slow for the nicer "clock time" effect. It seems to be much faster and better with this simpel jquery client. 

#### Other clients
For Media streams we should use a native Qt Client, since it's much more realiable. 

# Docker
The docker image is build with github workflow.
The Docker Container can be downloaded from [Github registry](https://github.com/Summeli/Speed-Climbing-Results-Streamer/pkgs/container/finice-speed-stream)

### Docker ENV variables
WSURL is the URL for websockets to connect int.

# Local dev
start node with 
`yarn start`

# Related projects
[algetiming-streamer](https://github.com/Summeli/algetiming-streamer) streams the data from alge devices into the websocket and into this service
