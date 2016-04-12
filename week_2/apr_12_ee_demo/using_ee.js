const ee = require('./ee_multiple_listen');

ee.on('unicorns', function(unicorn) {
  console.log('from inside using ee ' + unicorn);
});
ee.emit('unicorns', 'magic');

module.exports = ee;
