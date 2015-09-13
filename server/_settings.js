// Provide defaults for Meteor.settings
// Facbeook settings
if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: "475497805963919",
        secret: "bf4d37d1bd2def52bd34ff23f357706e"
  });
}


// Additional Collections
Memories = new Mongo.Collection('memories');
