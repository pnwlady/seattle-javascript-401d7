const fs = require('fs');

var logErrCallback = function(logDir, cb) {
  return function(err, data) {
    if (err) {
      cb(err);
      return fs.writeFile(logDir + '/' + new Date(), err);
    }

    cb(null, data);
  };
};

fs.readFile(__dirname + '/testfile.txt', logErrCallback(__dirname + '/log', function(err, data) {
  if (err) return console.log(err);

  console.log(data);
}));
