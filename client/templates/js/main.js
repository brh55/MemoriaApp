Template.main.helpers({
    picture: function() {// helper function to display the pic on the page
        var userProfile;
        userProfile = Meteor.user().profile;

        if (userProfile) { // logic to handle logged out state
          return userProfile.picture;
        }
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
