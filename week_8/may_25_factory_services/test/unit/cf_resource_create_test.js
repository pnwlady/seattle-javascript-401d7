var angular = require('angular');

describe('cfResourceCreate', function () {
  var cfResource;

  beforeEach(angular.mock.module('demoApp'));

  it('should return a function', angular.mock.inject(function(cfResource) {
    expect(typeof cfResource).toBe('function');
  }));

  it('should add to the test array', angular.mock.inject(function(cfResource) {
    var baseUrl = 'localhost:8000'
    testArray = [];
    errorTest = [];
    var testRemote = new cfResource(testArray, errorTest, baseUrl);
    var createTest = function(newTestItem) {
      testRemote.create(this.newTestItem)
        .then(() => {
          console.log('function called')
          this.newTestItem = null;
        });
    }.bind(this);

    createTest({ name: 'testBear' });
    expect(typeof testRemote).toBe('object');
    expect(testArray.length).toBe(1);
    expect(errorTest.length).toBe(1);
  }));

});
