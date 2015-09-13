Meteor.subscribe('memories');

Template.memory.helpers({
    coverPhoto: function() {
        var cover = Memories.find().fetch();
        console.log(Meteor.userId());
        // Temporarily
        return 'https://unsplash.com/photos/uXzNVOZT5no/download';
    },
    title: function() {
        return 'A Tempest Night.';
    },
    location: function() {
        return 'Hawaii';
    },
    date: function() {
        return '08.20.15';
    },
    description: function() {
        return 'Mauris malesuada blandit augue. Nam volutpat sapien sed dolor facilisis pharetra. Quisque posuere augue eu fringilla accumsan. Donec ultricies sem vitae nibh lacinia venenatis. Donec placerat ornare ultricies.'
    }
});
