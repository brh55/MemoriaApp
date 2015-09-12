
Template.main.helpers({
    picture: function () { // helper function to display the pic on the page
        var userProfile;
        userProfile = Meteor.user().profile;

        if (userProfile) { // logic to handle logged out state
            return userProfile.picture;
        }
    },
    'photo': function () {
        return Session.get('photo');
    },
    'address': function () {
        return Session.get('location');
    }
});

Template.main.events({
    'click .capture': function () {
        console.log("Button Clicked.");
        MeteorCamera.getPicture({}, function (error, data) {
            console.log(data);
            Session.set('photo', data);
        });
    }
});

Template.main.events({
    'click .geo': function () {
        var data = Geolocation.latLng()
            //        var loc = Geolocation.currentLocation();
        var lat = data.lat;
        var lng = data.lng;
        reverseGeocode.getLocation(lat, lng, function (location) {

            //location is straight output from Google
            //or you can now access it from reverseGeocode object
            Session.set('location', reverseGeocode.getAddrStr());
        });


        setTimeout(function () {
            var address = Session.get('location');
            console.log(address);
        }, 500);


    }
});

Meteor.subscribe("currentUserData");

// EasySearch.createSearchIndex('users', {
//   field: 'name',
//   collection: Meteor.users,
//   use: 'mongo-db'
// });
// 

EasySearch.createSearchIndex('userList', {
    'collection': Meteor.users,
    'field': 'name',
    'limit': 10,
    'use': 'mongo-db',
    'props': {
        'sortBy': 'name'
    },
    'query': function(searchString, opts) {
        console.log('hi');
        var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

        return query;
    }
});

// SearchSource.defineSource('users', profile, function (searchText, options) {
//     var options = {sort: {name: 1}, limit: 20};

//     if(searchText) {
//         var selector = [
//     ]};
//     return Packages.find(selector, options).fetch();
//   } else {
//     return Packages.find({}, options).fetch();
//   }
// }
