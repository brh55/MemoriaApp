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
        var owner = Meteor.userId();

        Memories.insert({
            title: title,
            description: description,
            owner: owner
        });
    }
});
