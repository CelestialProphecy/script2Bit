'use strict';

describe('Service: mockDataService', function () {

  // load the service's module
  beforeEach(module('script2Bit'));

  // instantiate service
  var mockDataService;
  beforeEach(inject(function (_mockDataService_) {
    mockDataService = _mockDataService_;
  }));

  it('should do something', function () {
    expect(!!mockDataService).toBe(true);
  });

});
