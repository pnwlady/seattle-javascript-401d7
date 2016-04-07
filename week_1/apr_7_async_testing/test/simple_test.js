const assert = require('assert');

describe('a failing test', () => {
  it('should pass', (done) => {
    process.nextTick(() => {
      assert((true === false), 'true was not true one');
    });

    done();
  });

  it('should fail', (done) => {
    process.nextTick(() => {
      assert((true === false), 'true was not true two');
      done();
    });
  });

  it('shuzzzzold pass', (done) => {
    process.nextTick(() => {
      done();
      assert(true === false, 'true was not true three');
    });
  });

  it('should pass', () => {
    process.nextTick(() => {
      assert((true === false), 'true was not true four');
    });
  });
});
