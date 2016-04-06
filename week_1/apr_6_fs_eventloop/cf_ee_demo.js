var EE = require(__dirname + '/cf_ee');

var ee = new EE();

ee.on('myevent', function(one, two, three) {
  console.log(one + two + three);
});

ee.emit('myevent', 'hello');
ee.emit('myevent', 'hello', 'world');
ee.emit('myevent', 'hello', 'world', 'again');
