'use strict';

/**
 * @ngdoc function
 * @name script2Bit.controller:SceneCtrl
 * @description
 * # SceneCtrl
 * Controller of the script2Bit
 */
angular.module('script2Bit').controller('SceneCtrl', ['$scope', 'actorHelper', 'mockDataService', 'smsService',
'mailService', '$mdDialog', '$rootScope',
        function ($scope, actorHelper, mockDataService, smsService, mailService, $mdDialog, $rootScope) {
  var setSceneData = function(sceneIndex) {
    $scope.dialogues = mockDataService.getDialoguesForScene(sceneIndex);
    $scope.actors = actorHelper.getActorsFromDialogues($scope.dialogues);
  };
  var init = function() {
    $rootScope.loggedIn = true;
    $scope.scenes = mockDataService.getScenes();
    setSceneData(0);
  };

  init();

  $scope.onSceneChange = function() {
    if (typeof $scope.nextSceneIndex !== 'undefined') {
      setSceneData($scope.nextSceneIndex);
      $scope.nextSceneIndex = void 0;
    }
  };

  $('.scenes-roll').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $scope.nextSceneIndex = nextSlide;
    $('.scene-changer').click();
  });

  $scope.expandDialogue = function(dialogueIndex) {
    $('.dialogue-list-item').eq(dialogueIndex).toggleClass('expanded');
  };

  $scope.expandDialogues = function(actorName) {
    $('.dialogue-list-item.expanded').removeClass('expanded');
    $('.dialogue-list-item[data-actor="' + actorName + '"]').addClass('expanded');
  };

  $scope.sendSMS = function() {
    var confirm = $mdDialog.confirm()
              .title('Send SMS Confirmation')
              .ariaLabel('Lucky day')
              .ok('Send')
              .textContent('Are you sure to send SMS')
              .cancel('Cancel');
        $mdDialog.show(confirm).then(function() {
          var sms = {
              "to" : "+1",
              "from" : "+1",
              "message" : "Test"
              };
              smsService.sendSMS(sms).then(function successCallBack(response) {
                toastr.success("Message successfully sent");
              }, function errorCallBack(response) {
                toastr.error("Message could not be sent");
              });
        }, function() {
        });
  }

  $scope.sendMail = function() {
    var confirm = $mdDialog.confirm()
                  .title('Send Email Confirmation')
                  .ariaLabel('Lucky day')
                  .ok('Send')
                  .textContent('Are you sure to send Email')
                  .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
              var mail = {
                    "from" : 'script2bit@studivo.com',
                    "to" : "",
                    "subject" : "",
                    "message" : ""
                  };
                  mailService.sendMail(mail).then(function successCallBack(response) {
                    toastr.success("Mail successfully sent");
                  }, function errorCallBack(response) {
                    toastr.error("Mail could not be sent");
                  });
            }, function() {
            });
  }
}]);
