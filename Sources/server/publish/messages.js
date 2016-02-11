Meteor.publish("allMessages", function () {
    Meteor._sleepForMs(2000);
    return Messages.find();
});