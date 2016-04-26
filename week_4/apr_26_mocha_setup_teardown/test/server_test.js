const chai = require('chai');
const http = require('chai-http');
chai.use(http);

const expect = chai.expect;
const mongoose = require('mongoose');
const server = require(__dirname + '/../server');

describe('our super awesome server', () => {
  before((done) => {
    mongoose.disconnect(() => {
      done();
    });
  });

  before((done) => {
    if (!mongoose.connections[0].host) {
      mongoose.connect('mongodb://localhost/test_server');
    }
    server.listen(3000, done);
  });

  after(() => {
    server.close();
    mongoose.disconnect();
  });

  it('should send back some text', (done) => {
    chai.request('localhost:3000')
      .get('/anyroute/itdoesnnotmatter/awesome/cowabunga')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('this is the only route');
        done();
      });
  });
});
