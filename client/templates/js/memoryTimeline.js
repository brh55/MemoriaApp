Meteor.subscribe('memories');

Template.memoryTimeline.helpers({
    quotes: function () {
        var quoteSet = [
            "Laughter is not at all a bad beginning for a friendship, and it is far the best ending for one. - Oscar Wilde",
            "Coming together is a beginning; keeping together is progress; working together is success. - Henry Ford",
            "Every new beginning comes from some other beginning's end. - Seneca"
        ];

        var rand = Math.random(1,3);
        return quoteSet[Math.ceil(rand)];
    },
    /*
        Do not do this like this! this is strictly for hackathon purposes
     */
    title: function () {
        var paramsId = Router.current().params.id;
        var memory = Memories.find({_id: paramsId}).fetch();
        return memory[0].title;
    },
    coverPhoto: function () {
        var paramsId = Router.current().params.id;
        var memory = Memories.find({_id: paramsId}).fetch();
        return memory[0].coverPhoto;
    }
});
