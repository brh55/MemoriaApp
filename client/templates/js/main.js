
Template.main.helpers({
    picture: function () { // helper function to display the pic on the page
        var userProfile;
        userProfile = Meteor.user().profile;

        if (userProfile) { // logic to handle logged out state
            return userProfile.picture;
        }
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
        }, 500);
    }
});


EasySearch.createSearchIndex('userList', {
    'collection': Meteor.users,
    'field': 'name',
    'limit': 10,
    'use': 'mongo-db',
    'props': {
        'sortBy': 'name'
    },
    'query': function(searchString, opts) {
        var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

        return query;
    }
});
