Meteor.subscribe('users');

Template.peopleImages.helpers({
    fbPics: function () {
        var users = Meteor.users.find().fetch();
        var userArray = [];

        var length = users.length;
        for (i = 0; i < length; i++) {
            userArray.push(
                { 'pictureUrl': users[i].profile.picture }
            );
        }

        return userArray;
    }
})
