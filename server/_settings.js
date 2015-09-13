// Provide defaults for Meteor.settings
// Facbeook settings
if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: "475497805963919",
        secret: "" // Insert Secret Key Here
  });
}


// Additional Collections
Memories = new Mongo.Collection('memories');
Highlights = new Mongo.Collection('highlights');
