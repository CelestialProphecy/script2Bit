'use strict';

describe('Controller: ModalUploadscriptCtrl', function () {

  // load the controller's module
  beforeEach(module('script2Bit'));

  var ModalUploadscriptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalUploadscriptCtrl = $controller('ModalUploadscriptCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModalUploadscriptCtrl.awesomeThings.length).toBe(3);
  });
});
