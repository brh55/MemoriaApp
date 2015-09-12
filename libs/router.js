var feedSubscription;
// Test Comment sadsa
// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
    Meteor.subscribe('news');
    Meteor.subscribe('bookmarkCounts');
    feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
    layoutTemplate: 'app-body',
    notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data
    dataReadyHold = LaunchScreen.hold();
}


Router.map(function () {
    this.route('home', {
        path: '/home',
        layoutTemplate: 'home'
    });
    this.route('create', {
        path: '/memories/create',
        layoutTemplate: 'create'
    });
    this.route('prev-memory', {
        path: '/memories/prev-memory',
        layoutTemplate: 'prev-memory'
    });
    this.route('upload', {
        path: '/memories/upload',
        layoutTemplate: 'upload'
    });
    this.route('login');
});