// This code only runs on the client
Template.create.helpers({
    memories: function () {
        return Memories.find({});
    }
});

Template.peopleImages.helpers({
    fbPics: function () {
        var users = Meteor.users.find({});

        console.log(users);

        var lim = users.length;
        var userArray = [];


        for (i = 0; i < lim; i++) {
                            console.log('iterated');

            userArray.push(
                { pictureUrl: users[i].profile.picture }
            );
        }
        return userArray
    }
})

Template.create.events({
    "submit form": function (event) {
        event.preventDefault();

        var title = event.target.title.value;
        var description = event.target.description.value;
        var location = event.target.location.value;
        var tag = event.target.tag.value;
        var owner = Meteor.userId();
        var date = new Date(milliseconds);

        Memories.insert({
            title: title,
            description: description,
            owner: owner,
            createdAt: date,
            people: [],
            mainLocation: location,
            tag: tag
        });
    }
});
