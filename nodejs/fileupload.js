const fs = require('fs');

const stream = fs.createReadStream('./2.jpeg');

stream.pipe(fs.createWriteStream('out.jpeg'));
