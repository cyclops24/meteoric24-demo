IndexController = RouteController.extend({
    //layoutTemplate: 'PostLayout',

    template: 'index',

    waitOn: function () {
        return Meteor.subscribe('allMessages');
    },

    data: function () {
        return {
            messages: Messages.find()
        }
    },

    action: function () {
        this.render();
    }
});