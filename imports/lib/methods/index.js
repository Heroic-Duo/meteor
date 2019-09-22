Meteor.methods({
  UpdateTime() {
    Time.upsert('Time', {
      $set: { time: new Date() }
    })
  },
})