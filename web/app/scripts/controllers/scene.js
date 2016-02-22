'use strict';

/**
 * @ngdoc function
 * @name script2Bit.controller:SceneCtrl
 * @description
 * # SceneCtrl
 * Controller of the script2Bit
 */
angular.module('script2Bit').controller('SceneCtrl', ['$scope', 'actorHelper', 'mockDataService', 'smsService',
'mailService', '$mdDialog', '$rootScope', '$location',
        function ($scope, actorHelper, mockDataService, smsService, mailService, $mdDialog, $rootScope, $location) {
  var setSceneData = function(sceneIndex) {
    $scope.dialogues = mockDataService.getDialoguesForScene(sceneIndex);
    $scope.actors = actorHelper.getActorsFromDialogues($scope.dialogues);
    $scope.location = mockDataService.getSceneLocation(sceneIndex);
    $scope.duration = mockDataService.getSceneDuration(sceneIndex);
    $scope.time = mockDataService.getSceneTime(sceneIndex);
    $scope.condition = mockDataService.getSceneCondition(sceneIndex);
  };
  var init = function() {
    if(!$rootScope.loggedIn) {
      $location.path('/');
    }
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
              "to" : "+919599937739",
              "from" : "+12065718430",
              "message" : "Scene: Entrance \n Dialogue: How are you? "
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
                    "to" : $scope.email,
                    "subject" : "Scene - Entrance Details",
                    "message" : "Location: Balcony, Duration: 5 min, Time: Evening \n "
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
