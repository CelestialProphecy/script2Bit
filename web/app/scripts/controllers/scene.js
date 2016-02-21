'use strict';

/**
 * @ngdoc function
 * @name script2Bit.controller:SceneCtrl
 * @description
 * # SceneCtrl
 * Controller of the script2Bit
 */
angular.module('script2Bit').controller('SceneCtrl', ['$scope', 'actorHelper', 'mockDataService', function ($scope, actorHelper, mockDataService) {
  var setSceneData = function(sceneIndex) {
    $scope.dialogues = mockDataService.getDialoguesForScene(sceneIndex);
    $scope.actors = actorHelper.getActorsFromDialogues($scope.dialogues);
  };
  var init = function() {
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
}]);
