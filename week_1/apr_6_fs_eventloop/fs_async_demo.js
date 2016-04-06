const fs = require('fs');

process.nextTick(() => {
  console.log('inside next tick');
  fs.readFile('two.txt', (err, data) => {
    if (err) return console.log(err);

    console.log('from two: ' + data);
  });
});

fs.readFile('one.txt', (err, data) => {
  if (err) return console.log(err);

  process.nextTick(() => {
    console.log('from one: ' + data.toString());
  });
});

console.log('first');
