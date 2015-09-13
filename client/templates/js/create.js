Memories = new Mongo.Collection('memories');

Meteor.subscribe("memories");

Template.create.events({
    "submit form": function (event) {
        event.preventDefault();

        var title = event.target.title.value;
        var description = event.target.description.value;
        var tag = event.target.tag.value;
        var coverPhoto = event.target.coverPhoto.value;
        var owner = Meteor.userId();
        var date = new Date();

        Memories.insert({
            title: title,
            description: description,
            owner: owner,
            createdAt: date,
            coverPhoto: coverPhoto,
            people: [],
            tag: tag
        }, function(err, id) {
            if (id) {
                Router.go('memory', {
                    id: id
                });
            }
        });

    }
});
