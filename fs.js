const fs = require('fs');
const filesInDir = fs.readdirSync(__dirname);
console.log(filesInDir);