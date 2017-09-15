const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    // синхронное чтение файла и он весь загружается в ОЗУ
    // fs.readFile('text.txt', (error, data) => {
    //     if(error) {
    //         throw error;
    //     }
    //     res.end(data);
    // });

    // чтение файла чанками и передача через pipe в res
    const stream = fs.createReadStream('text.txt');
    stream.pipe(res);

    // чтение файла чанками и передача через обработку события
    // const stream = fs.createReadStream('text.txt');
    // let data = '';

    // stream.on('data', chunk => res.write(chunk));
}).listen(3000);

//https://www.youtube.com/watch?v=_EhqwOY4Ei0&t=2038s