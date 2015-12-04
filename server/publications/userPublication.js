
/*Publication of this user with more fields */
Meteor.publish("thisUser", function(argument){
  if (this.userId) {
    return Meteor.users.find({_id: this.userId}, {
      fields: {
        registrationCompleted: 1,
        profile: 1
      }
    })
  }
});
