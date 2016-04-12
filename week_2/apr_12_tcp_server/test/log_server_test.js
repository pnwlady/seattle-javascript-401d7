const net = require('net');
const expect = require('chai').expect;
const WriteStream = require('stream').Writable;
const LogServer = require(__dirname + '/../lib/log_server');
const fs = require('fs');

describe('log server', () => {
  beforeEach('setup stream', () => {
    this.write = new WriteStream();
    this.write.data = '';
    this.write._write = (chunk) => {
      this.write.data += chunk.toString(); 
    };
  });

  it('should log a file', (done) => {
    var time;
    var logServer = LogServer(__dirname + '/test_log/', this.write, () => {
      expect(this.write.data).to.eql('hello!');
      var fileData = fs.readFileSync(__dirname + '/test_log/' + time);
      expect(fileData.toString()).to.eql('hello!');
      logServer.close();
      done();
    });

    logServer.listen(5000);
    var client = net.connect({port: 5000}, () => {
      client.write('hello!');
    });

    client.on('data', (chunk) => {
      time = chunk.toString();
    });
  });
});
