'use strict';

/**
 * @ngdoc service
 * @name script2Bit.mockDataService
 * @description
 * # mockDataService
 * Service in the script2Bit.
 */
angular.module('script2Bit')
  .service('mockDataService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getScenes: function () {
        return [
          'Scene 1',
          'Scene 2',
          'Scene 3',
          'Scene 4',
          'Scene 5',
          'Scene 6',
          'Scene 7',
          'Scene 8',
          'Scene 9',
          'Scene 10'
        ];
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
  });
