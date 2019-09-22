Meteor.publish('Time', function() {
  return Time.find({});
});
Meteor.publish('Menu', function() {
  return Menu.find({});
});
Meteor.publish('Shi', function() {
  return Shi.find({});
});
Meteor.publish('Daojia', function() {
  return Daojia.find({});
});