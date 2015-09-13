// User based code
Accounts.onCreateUser(function(options, user) {
    check(options, Object);
    check(user, Object);

    options.profile.email = user.services.facebook.email;
    options.profile.facebookId = user.services.facebook.id;
    options.profile.picture = getFbPicture(user.services.facebook.id);

    user.profile = options.profile;

    user.name = user.services.facebook.name;
    return user;
});


// Helper Methods
var getFbPicture = function(facebookId) { // make async call to grab the picture from facebook
    var result;

    var url = "https://graph.facebook.com/" + facebookId + "/picture"
    result = Meteor.http.get(url, {
        params: {
            type: 'large',
            redirect: 'false'
        }
    });

    if(result.error) {
        throw result.error;
    }

    return result.data.data.url; // return the picture's url
};
