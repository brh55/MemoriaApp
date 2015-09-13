Memories = new Mongo.Collection('memories');

Meteor.subscribe("memories");

// This code only runs on the client
Template.create.helpers({
    memories: function () {
        return Memories.find({});
    }
});

Template.create.events({
    "submit form": function (event) {
        event.preventDefault();

        var title = event.target.title.value;
        var description = event.target.description.value;
        var tag = event.target.tag.value;
        var owner = Meteor.userId();
        var date = new Date();

        Memories.insert({
            title: title,
            description: description,
            owner: owner,
            createdAt: date,
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
