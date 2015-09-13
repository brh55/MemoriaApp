Router.configure({
    layoutTemplate: 'app-body',
    notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data
    dataReadyHold = LaunchScreen.hold();
}

MemoriesController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('memories', this.params.id);
  }
});

Router.map(function () {
    this.route('home', {
        path: '/home',
        layoutTemplate: 'home'
    });
    this.route('create', {
        path: '/memories/create',
        layoutTemplate: 'create'
    });
    this.route('memory', {
        path: 'memories/:id',
        layoutTemplate: 'memoryTimeline'
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
