const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log(req.url);
    res.end('hi from http server nodejs');
});

server.on('error', error => console.log(error));
server.listen(3000);