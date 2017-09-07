const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    // fs.readFile('text.txt', (error, data) => {
    //     if(error) {
    //         throw error;
    //     }
    //     res.end(data);
    // });
    const stream = fs.createReadStream('text.txt');
    stream.pipe(res);
}).listen(3000);