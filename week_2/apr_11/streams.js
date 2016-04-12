const fs = require('fs');

const text = fs.createReadStream(__dirname + '/bigfile.txt');


// text.pipe(process.stdout);

process.stdin.on('data', (chunk) => {
  // debugger;
  // chunk = chunk.toString('hex');
  chunk = chunk.toString().toUpperCase();
  process.stdout.write(chunk);
});

