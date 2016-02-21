'use strict';

describe('Controller: SceneCtrl', function () {

  // load the controller's module
  beforeEach(module('script2Bit'));

  var SceneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SceneCtrl = $controller('SceneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SceneCtrl.awesomeThings.length).toBe(3);
  });
});
