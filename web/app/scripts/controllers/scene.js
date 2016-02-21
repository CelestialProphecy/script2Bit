'use strict';

/**
 * @ngdoc function
 * @name script2Bit.controller:SceneCtrl
 * @description
 * # SceneCtrl
 * Controller of the script2Bit
 */
angular.module('script2Bit')
  .controller('SceneCtrl', ['$scope', function ($scope) {

    $scope.init = function(){
      $scope.scenes = script2Bit.util.getScenes();
      $scope.actors = script2Bit.util.getActorsForScene(0);
    };

    $scope.init();

    $scope.onSceneChange = function() {
      var sceneIndex = $scope.nextSceneIndex;
      $scope.nextSceneIndex = 0;
      $scope.actors = script2Bit.util.getActorsForScene(sceneIndex);
    };

    $('.scenes-roll').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $scope.nextSceneIndex = nextSlide;
      $('.scene-changer').click();
    });
  }]);
