Template.main.helpers({
    picture: function() {// helper function to display the pic on the page
        var userProfile;
        userProfile = Meteor.user().profile;

        if (userProfile) { // logic to handle logged out state
          return userProfile.picture;
        }
    }
});

UserAccounts = new Mongo.Collection('users');

// Search Engine Feature
UserAccounts.initEasySearch('profile.name');
