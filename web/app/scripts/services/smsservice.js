'use strict';

/**
 * @ngdoc service
 * @name script2Bit.smsService
 * @description
 * # smsService
 * Service in the script2Bit.
 */
script2Bit.service('smsService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var factory = {};

    factory.sendSMS = function(sms) {
      return $http({
        method: 'POST',
        url: 'http://localhost:2100/v1/sms/sendSMS',
        data : sms
      });
    }
    return factory;
  }]);
