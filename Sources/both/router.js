Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: "notFound",
    loadingTemplate: "loading"
});

Meteor.startup(function () {
    if (Meteor.isClient) {
        var location = Iron.Location.get();
        if (location.queryObject.platformOverride) {
            Session.set('platformOverride', location.queryObject.platformOverride);
        }
    }
});

Router.map(function() {
    this.route('index', {path: '/', controller: 'IndexController'});
    this.route('blurredIssue', {path: '/blurredIssue', controller: 'BlurredIssueController'});
});