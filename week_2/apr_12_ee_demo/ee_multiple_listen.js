var EE = require('events');
var ee = new EE();

ee.on('unicorns', function(unicorn) {
  console.log('first from unicorns ' + unicorn);
});

ee.on('unicorns', function(unicorn) {
  console.log('second from unicorns ' + unicorn);
});

ee.emit('unicorns', 'charlie');

module.exports = ee;
