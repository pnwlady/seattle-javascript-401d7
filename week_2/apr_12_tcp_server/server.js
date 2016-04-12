const logServer = require('./lib/log_server')(__dirname + '/log/', process.stdout, function() {}).listen(3000, () => {
  console.log('server up');
});
