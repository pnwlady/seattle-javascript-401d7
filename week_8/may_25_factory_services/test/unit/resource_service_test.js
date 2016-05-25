const angular = require('angular');
//require('../../app/js/services/cf_resource');
require('angular-mocks');
require('../../app/js/entry.js');
//const apiUrl = 'http://localhost:3000';

describe('it should test the service', function() {
  var $httpBackend;
  var bearsctrl;
  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOustandingRequest();
  });

  it('should get all the resources', () => {
    angular.mock.inject(function(cfResource) {
      var resourceArray = [];
      var errorsArray = [];
      //var apiUrl = '/api/bears';
      var resource = new cfResource(resourceArray, errorsArray, baseUrl);
    });
    $httpBackend.expectGET('http://localhost:3000/api/bears').respond(200, [{ name: 'Yogi'}]);
    bearsctrl.getAll();
    $httpBackend.flush();
    expect(bearsctrl.bears.length).toBe(1);
    expect(bearsctrl.bears[0].name).toBe('Yogi');
  });
});
