var expect = require('chai').expect;

describe('greet cli', () => {
  before(() => {
    this.process_backup = process.argv;
    process.argv = [,,'test'];
  });

  after(() => {
    process.argv = this.process_backup;
  });
  
  it('should greet test', () => {
    var greetCliResult = require(__dirname + '/../bin/greet');
    expect(greetCliResult).to.eql('hello test');
  });

  describe('with no arguments', () => {
    before(() => {
      process.argv = [];
    });

    it('should greet the world', () => {
      debugger;
      var greetCliResult = require(__dirname + '/../bin/greet');
      expect(greetCliResult).to.eql('hello world');
    });
  });
});
