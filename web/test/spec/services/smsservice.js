'use strict';

describe('Service: smsService', function () {

  // load the service's module
  beforeEach(module('script2Bit'));

  // instantiate service
  var smsService;
  beforeEach(inject(function (_smsService_) {
    smsService = _smsService_;
  }));

  it('should do something', function () {
    expect(!!smsService).toBe(true);
  });

});
