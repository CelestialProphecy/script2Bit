'use strict';

describe('Service: mailService', function () {

  // load the service's module
  beforeEach(module('script2Bit'));

  // instantiate service
  var mailService;
  beforeEach(inject(function (_mailService_) {
    mailService = _mailService_;
  }));

  it('should do something', function () {
    expect(!!mailService).toBe(true);
  });

});
