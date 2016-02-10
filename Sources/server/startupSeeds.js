Meteor.startup(function () {
    if (Messages.find().count() === 0) {
        Messages.insert({title: "title 1", text: "text text text text text text text 1"});
        Messages.insert({title: "title 2", text: "text text text text text text text 2"});
        Messages.insert({title: "title 3", text: "text text text text text text text 3"});
        Messages.insert({title: "title 4", text: "text text text text text text text 4"});
        Messages.insert({title: "title 5", text: "text text text text text text text 5"});
        Messages.insert({title: "title 6", text: "text text text text text text text 6"});
        Messages.insert({title: "title 7", text: "text text text text text text text 7"});
        Messages.insert({title: "title 8", text: "text text text text text text text 8"});
        Messages.insert({title: "title 9", text: "text text text text text text text 9"});
        Messages.insert({title: "title 10", text: "text text text text text text text 10"});
    }
});
