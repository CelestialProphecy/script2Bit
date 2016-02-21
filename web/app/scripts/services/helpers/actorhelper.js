'use strict';

/**
 * @ngdoc service
 * @name script2Bit.helpers/actorHelper
 * @description
 * # helpers/actorHelper
 * Service in the script2Bit.
 */
angular.module('script2Bit')
  .service('actorHelper', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var helper = {};

    helper.getNameInitials = function (name) {
      var nameParts = name.split(' '),
        nameInitials = '';

      for (var index = 0; index < nameParts.length; index++) {
        nameInitials += nameParts[index].charAt(0);
      }
      return nameInitials.length > 1 ? nameInitials : (nameInitials + name.charAt(1));
    };

    helper.getActorsFromDialogues = function (dialogues) {
      var colors = ['#2E75B6', '#548235', '#BF9000', '#640064', '#ff0000'],
        actors = {},
        ctr = 0;

      if (dialogues) {
        for (var index = 0; index < dialogues.length; index++) {
          var actorName = dialogues[index].actor;
          if (!actors[actorName]) {
            actors[actorName] = {
              name: actorName,
              initials: helper.getNameInitials(actorName),
              color: colors[ctr++ % colors.length]
            };
          }
        }
      }

      return actors;
    };

    return helper;
  });
