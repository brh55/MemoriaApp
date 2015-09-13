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
    // coverPhoto: function() {
    //     var cover = Memories.find().fetch();
    //     console.log(Meteor.userId());
    //     // Temporarily
    //     return 'https://unsplash.com/photos/uXzNVOZT5no/download';
    // },
    // title: function() {
    //     return 'A Tempest Night.';
    // },
    // location: function() {
    //     return 'Hawaii';
    // },
    // date: function() {
    //     return '08.20.15';
    // },
    // description: function() {
    //     return 'Mauris malesuada blandit augue. Nam volutpat sapien sed dolor facilisis pharetra. Quisque posuere augue eu fringilla accumsan. Donec ultricies sem vitae nibh lacinia venenatis. Donec placerat ornare ultricies.'
    // }
});
