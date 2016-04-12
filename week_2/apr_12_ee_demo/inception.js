const ee = require('./using_ee');

ee.on('unicorns', (unicorn) => {
  console.log('time is so slow here ' + unicorn);
});

ee.emit('unicorns', 'another layer');
