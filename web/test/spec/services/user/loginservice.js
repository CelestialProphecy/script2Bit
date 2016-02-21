'use strict';

describe('Service: user/loginService', function () {

  // load the service's module
  beforeEach(module('script2Bit'));

  // instantiate service
  var user/loginService;
  beforeEach(inject(function (_user/loginService_) {
    user/loginService = _user/loginService_;
  }));

  it('should do something', function () {
    expect(!!user/loginService).toBe(true);
  });

});
