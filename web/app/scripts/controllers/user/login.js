'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:UserLoginCtrl
 * @description
 * # UserLoginCtrl
 * Controller of the script2Bit
 */
script2Bit.controller('UserLoginCtrl', ['$scope', '$http', function ($scope, $http) {
  var file;
  $scope.init = function() {
    $http.get('../../../files/scriptFiles/Big-Fish.txt').success(function(data) {
      file = data;
      console.log(file);
    });
    var output = fountain.parse(file);
    console.log(output);
  };
  $scope.init();

  }]);
