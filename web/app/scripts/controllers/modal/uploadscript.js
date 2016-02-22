'use strict';

/**
 * @ngdoc function
 * @name script2Bit.controller:uploadscriptCtrl
 * @description
 * # ModalUploadscriptCtrl
 * Controller of the script2Bit
 */
script2Bit
  .controller('uploadScriptCtrl', ['$scope', '$rootScope', '$uibModalInstance', function ($scope, $rootScope, $uibModalInstance) {
    $scope.parseScript = function(scriptText) {
      // TODO: parse script text and load scenes view
      //console.log(scriptText);
      $rootScope.script = fountain.parseToJson(scriptText);
      $uibModalInstance.close();
    };

    $scope.loadScriptFile = function(element) {
      $scope.uploading = true;
         $scope.$apply(function(scope) {
             var file = element.files[0];
             var reader = new FileReader();
             reader.onload = function(evt) {
                $scope.parseScript(evt.target.result);
             };
             reader.readAsText(file, 'UTF-8');
         });
    };
  }]);
