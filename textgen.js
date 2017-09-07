const fs = require('fs');
const file = fs.createWriteStream('text.txt');

for(let i = 0; i < 1000000; i++) {
    file.write("gl hf gg and going to your goals and good luck");
}
file.end;