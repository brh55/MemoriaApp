// Helper Methods
Template.home.helpers({
  userProfilePic: function() {
    var user = Meteor.user();
    var url = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large&redirect=false";

    Meteor.call("getEndpoint", url, function (error, result) {
        if (error) {
            console.log('unsucessful fetch of facebook');
        }
        if (result) {
            return result.data.data.url;
        }
    });
  }
});
