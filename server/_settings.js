// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined')
  Meteor.settings = {};

_.defaults(Meteor.settings, {
  twitter: {
    consumerKey: "PLfrg2bUh0oL0asi3R2fumRjm",
    secret: "sRI8rnwO3sx7xUAxNWTX0WEDWph3WEBHu6tTdJYQ5wVrJeVCCt"
  }
});


if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "475497805963919",
    secret: "bf4d37d1bd2def52bd34ff23f357706e"
  });
}

Accounts.onCreateUser(function(options, user) {
  check(options, Object);
  check(user, Object);

  options.profile.email = user.services.facebook.email;
  options.profile.facebookId = user.services.facebook.id;
  options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";

  user.profile = options.profile;

  return user;
});
