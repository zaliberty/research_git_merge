const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('text.txt', (error, data) => {
        if(error) {
            throw error;
        }
        res.end(data);
    });
}).listen(3000);