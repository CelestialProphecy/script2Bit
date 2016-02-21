script2Bit.util = {
  getScenes: function() {
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

  getActorsForScene: function(sceneIndex) {
    var dummyActors = [ 'Rajat', 'Vaibhav', 'Budi', 'Archis', 'Jon', 'Jack', 'Martina', 'Christopher' ],
      colors = [ '#2E75B6', '#548235', '#BF9000', '#640064'],
      pivotIndex = (sceneIndex % 2) * 4,
      actors = [];

    for (var index = pivotIndex; index < pivotIndex + 4; index++) {
      actors.push({
        name: dummyActors[index],
        initials: script2Bit.util.getNameInitials(dummyActors[index]),
        color: colors[index % 4]
      });
    }
    return actors;
  },

  getNameInitials: function(name) {
    var nameParts = name.split(' '),
      nameInitials = '';

    for (var index = 0; index < nameParts.length; index++) {
      nameInitials += nameParts[index].charAt(0);
    }
    return nameInitials.length > 1 ? nameInitials : (nameInitials + name.charAt(1));
  }
};
