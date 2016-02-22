'use strict';

/**
 * @ngdoc function
 * @name script2Bit.controller:uploadscriptCtrl
 * @description
 * # ModalUploadscriptCtrl
 * Controller of the script2Bit
 */
script2Bit
  .controller('uploadScriptCtrl', ['$scope', '$rootScope', '$uibModalInstance', 'mockDataService', function ($scope, $rootScope, $uibModalInstance, mockDataService) {
    $scope.parseScript = function(scriptText) {
      if(scriptText != '' || scriptText != undefined) {
        $rootScope.script = fountain.parseToJson(scriptText);
        $scope.scenes = mockDataService.getScenes();
        $uibModalInstance.close();
      } else {
        toastr.error("No script found");
      }
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

    $scope.uploadButtonClick = function() {
      $('.script-upload-section input').click();
    };
  }]);
