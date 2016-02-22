'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:UserLoginCtrl
 * @description
 * # UserLoginCtrl
 * Controller of the script2Bit
 */
script2Bit.controller('UserLoginCtrl', ['$scope', '$http', 'loginService', '$location', '$rootScope', '$uibModal',
        function ($scope, $http, loginService, $location, $rootScope, $uibModal) {

  $scope.init = function() {
    $scope.success = false;
  var file;
    $http.get('../../../files/scriptFiles/Big-Fish.txt').success(function(data) {
      file = data;
      $rootScope.script = fountain.parseToJson(file);
      //console.log(JSON.stringify($rootScope.script));
    });
  };

  $scope.init();

  $scope.login = function() {
    var success;
    loginService.getAllUsers().then(function successCallback(response) {
      var list = response.data;
      var count = 0;
      for(var i=0; i< list.length; i++) {
         if(list[i].username == $scope.username && list[i].password == $scope.password) {
             $rootScope.user = list[i];
             count++;
         }
      }
      console.log($scope.user);
      console.log(list);
      console.log(count);
      if(count === 1)
        $scope.success = true;
      else
        $scope.success = false;

      console.log($scope.success);
      $scope.navigateOnSuccess();
    }, function errorCallBack(value) {
      $scope.success = false;
      $scope.navigateOnSuccess();
    });
  };

  $scope.navigateOnSuccess = function(){
    if($scope.success) {
       toastr.success("Logged In");
       $rootScope.loggedIn = true;
       $location.path("/scene");
    } else {
       toastr.error("Username or password Incorrect. Retry");
       $scope.username = '';
       $scope.password = '';
    }
  };

  $scope.logout = function() {
    $rootScope.loggedIn = false;
    toastr.success("Successfully logged out");
    $location.path("/");
  }

  $scope.openUploadScriptModal = function() {
    $uibModal.open({
       scope : $scope,
       templateUrl: 'views/uploadScriptModal.html',
       controller: 'uploadScriptCtrl',
       size: 'lg'
    });
  }
}]);
