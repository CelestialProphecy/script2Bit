'use strict';

/**
 * @ngdoc service
 * @name script2Bit.mailService
 * @description
 * # mailService
 * Service in the script2Bit.
 */
angular.module('script2Bit')
  .service('mailService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var factory = {};
    factory.sendMail = function(mail) {
      return $http({
         method: 'POST',
         url: 'http://localhost:2100/v1/mail/sendEmail',
         data : mail
      });
    }
    return factory;
  }]);
