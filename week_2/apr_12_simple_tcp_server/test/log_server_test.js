const net = require('net');
const fs = require('fs');
const expect = require('chai').expect;
require(__dirname + '/../server');

describe('log server', () => {
  it('should log to a file', (done) => {
    var client = net.connect({port: 3000}, () => {
      client.write('hello test!');
    });

    client.on('data', (chunk) => {
      var fileContents = fs.readFileSync(__dirname + '/../log/' + chunk.toString());
      expect(fileContents.toString()).to.eql('hello test!');
      done();
    });
  });
});
