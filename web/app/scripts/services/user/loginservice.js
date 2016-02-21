'use strict';

/**
 * @ngdoc service
 * @name script2Bit.user/loginService
 * @description
 * # user/loginService
 * Service in the script2Bit.
 */
script2Bit.service('loginService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  var factory = {};

  factory.getAllUsers = function() {
    return $http.get('../../../files/userDetails.json');
  };
  return factory;

  }]);
