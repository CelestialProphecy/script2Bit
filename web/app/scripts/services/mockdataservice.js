'use strict';

/**
 * @ngdoc service
 * @name script2Bit.mockDataService
 * @description
 * # mockDataService
 * Service in the script2Bit.
 */
angular.module('script2Bit')
  .service('mockDataService', ['$rootScope', function ($rootScope) {


    var getHeadings = function(scenes) {
      if (!Array.isArray(scenes)) {
        console.log("Scenes shouldbe an array");
        return [];
      }
      var headings = [];
      for (var i=0; i < scenes.length; i++) {
        var scene = scenes[i];
        for (var j=0; j < scene.length; j++) {
          var element = scene[j];
          if (element.type == "heading") {
            headings.push("Scene " + (i) + ": " + element.heading);
          }
        }
      }

      return headings;
    }

    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getScenes: function () {
        if (typeof $rootScope.script == 'undefined') {
          console.log("No script loaded in $rootScope");
          return [];
        }
        var scenes = getHeadings($rootScope.script.script.scenes);
        console.log(scenes);
        return scenes;
      },

      getActorsForScene: function (sceneIndex) {
        var dummyActors = ['Rajat', 'Vaibhav', 'Budi', 'Archis', 'Jon', 'Jack', 'Martina', 'Christopher'],
          pivotIndex = (sceneIndex % 2) * 4;

        return dummyActors.slice(pivotIndex, pivotIndex + 4);
      },

      getDialoguesForScene: function (sceneIndex) {
        return [
          {
            actor: 'Rajat',
            content: 'Hey.. What a surprise! How you doing?'
          },
          {
            actor: 'Vaibhav',
            content: 'I’m good. How are you? Didn’t see you since long. I’m good. How are you? Didn’t see you since long. I’m good. How are you? Didn’t see you since long.'
          },
          {
            actor: 'Rajat',
            content: 'Yeah! Meet my friend'
          },
          {
            actor: 'Budi',
            content: 'Hello'
          },
          {
            actor: 'Archis',
            content: 'Let\'s go out somewhere for dinner'
          },
          {
            actor: 'Rajat',
            content: 'Yeah! Meet my friend'
          },
          {
            actor: 'Rajat',
            content: 'Yeah! Meet my friend'
          }
        ];
      }
    };
  }]);
