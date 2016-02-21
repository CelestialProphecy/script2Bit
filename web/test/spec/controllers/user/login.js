'use strict';

describe('Controller: UserLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('script2Bit'));

  var UserLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserLoginCtrl = $controller('UserLoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserLoginCtrl.awesomeThings.length).toBe(3);
  });
});
