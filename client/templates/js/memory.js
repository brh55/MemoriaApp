Meteor.subscribe('memories');

Template.memory.helpers({
    memories: function () {
        var memoriesArray = Memories.find({}).fetch();

        for (i = 0; i < memoriesArray.length; i++) {
            var date = memoriesArray[i].createdAt;

            var month = date.getMonth() + 1;
            var day = date.getDay();
            var year = date.getFullYear();

            var dateFormat = month + ' . ' + day + ' . ' + year;

            memoriesArray[i].createdAt = dateFormat;
        }

        return memoriesArray;
    }
});
