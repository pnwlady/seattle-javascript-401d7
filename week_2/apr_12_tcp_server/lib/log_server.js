const net = require('net');
const fs = require('fs');

module.exports = exports = function(logDir, logStream, endCb) {
  return net.createServer(function(socket) {
    socket.pipe(logStream);
    var ct = new Date();
    var log = fs.createWriteStream(logDir + ct);
    socket.pipe(log);
    socket.on('data', () => {
      socket.end('' + ct);
    });
    socket.on('end', endCb);
  });
};
