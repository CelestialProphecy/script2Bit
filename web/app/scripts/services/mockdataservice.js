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
            headings.push("Scene " + (i));
          }
        }
      }

      return headings;
    }

    //Removes those (V.O) or (CONT'D) parts
    //from a character's name
    var removeBraces = function(character_name) {
      character_name = character_name.trim()
      var index = character_name.indexOf("(");
      if (index > 0) {
        //take it out
        character_name = character_name.substr(0, index).trim();
      }

      return character_name;
    }

    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getScenes: function () {
        if (typeof $rootScope.script == 'undefined') {
          console.log("No script loaded in $rootScope");
          return [];
        }
        var scenes = getHeadings($rootScope.script.script.scenes);
        return scenes;
      },

      getSceneLocation: function (sceneIndex) {
        var headings = [];
        var scene = $rootScope.script.script.scenes[sceneIndex];
        for (var j=0; j < scene.length; j++) {
          var element = scene[j];
          if (element.type == "heading") {
            return element.heading;
          }
        }


        return headings;
      },

      getSceneDuration: function (sceneIndex) {

      },
      getSceneTime: function (sceneIndex) {

      },

      getActorsForScene: function (sceneIndex) {
        var dialogues = getDialoguesForScene(sceneIndex);

        var actorsMap = {};
        for (var dialogueId = 0; dialogueId < dialogues.length; dialogueId++) {
          actorsMap[dialogues[dialogueId].actor] = 1;
        }

        var actors = [];
        for (var actor in actorsMap) {
          actors.push(actor);
        }

        //convert these to actors based on assignment
        return actor;
      },

      getDialoguesForScene: function (sceneIndex) {
        var scene = $rootScope.script.script.scenes[sceneIndex];
        var dialogues = [];
        for (var elementId = 0; elementId < scene.length; elementId++) {
          var element = scene[elementId];
          if ((element.type == "dialogue-single" || element.type == "dialogue-dual") &&
            typeof element.characters != 'undefined') {
            for (var characterId = 0; characterId < element.characters.length; characterId++) {
              var character = element.characters[characterId];
              if (character.type == "character") {
                var actorLine = {actor: removeBraces(character.name), content: ""};
                if (typeof character.lines != 'undefined') {
                  for (var lineId = 0; lineId < character.lines.length; lineId++) {
                    actorLine.content = actorLine.content + "\n" + character.lines[lineId].text;
                  }
                }
                dialogues.push(actorLine);
              }
            }
          }
        }

        return dialogues;

      }
    };
  }]);
