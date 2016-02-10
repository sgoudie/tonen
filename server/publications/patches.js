Meteor.publish('patches', function () {
  return Patches.find({}, { sort: { createdAt: -1 } });
});
