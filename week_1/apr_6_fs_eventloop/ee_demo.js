const EE = require('events');
const fs = require('fs');

const ee = new EE();

ee.on('first', () => {
  console.log('first');
});

ee.on('one:done', (data) => {
  console.log(data.toString());
  fs.readFile('two.txt', (err, data) => {
    if (err) return console.log(err); 

    ee.emit('two:done', data);
  });
});

ee.on('two:done', (data) => {
  console.log(data.toString());
  fs.readFile('three.txt', (err, data) => {
    if (err) return console.log(err); 

    ee.emit('three:done', data);
  });
});

ee.on('three:done', (data) => {
  console.log(data.toString());
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log('hello from nexttick');
  });
});

ee.emit('first');
fs.readFile('one.txt', (err, data) => {
  if (err) return console.log(err);

  process.nextTick(() => {
    ee.emit('one:done', data);
  });
});

process.nextTick(() => {
  console.log('second next tick');
});
