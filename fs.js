const fs = require('fs');
const filesInDir = fs.readdirSync(__dirname);
console.log('list files from sync readdir', filesInDir);

fs.readdir(__dirname, (error, files) => {
    if(error) {
        return console.error(error);
    }

    console.log('list files from async readdir: ', files)
});