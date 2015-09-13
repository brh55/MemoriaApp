var Highlights = new Mongo.Collection('highlights');
Meteor.subscribe('highlights');

Template.quickButtons.events({
    'click .mic': function () {
        //create a web audio context in your application
        var audioContext = new AudioContext();
        var myWebAudioNode = audioContext.createGain();

        //to access the microphone, pass the audio context and your callbacks functions
        var microphone = new Microphone({
            audioContext: audioContext,
            onSuccess: function () {
                //connect the microphone to the rest of your web audio chain (microphone includes intermediate ScriptProcessorNode for onNoSignal and onAudioData handler)
                microphone.connect(myWebAudioNode);
                myWebAudioNode.connect(audioContext.destination);

                // instead you can also connect directly to its sourceNode, if you don't need onAudioData and onNoSignal handler methods
                // microphone.sourceNode.connect(myWebAudioNode);

                console.log("Mic access successfull!");
            },
            onReject: function () {
                console.error("Mic access rejected");
            },
            onNoSignal: function () {
                console.error("No signal received so far, check your systems settings!");
            },
            onNoSource: function () {
                console.error("No getUserMedia and no Flash available in this browser!");
            },
            onAudioData: function (audioData) {
                doSomeFancyStuffWith(audioData);
            }
        });
    },
    'click .capture': function () {
        MeteorCamera.getPicture({}, function (error, data) {
            Session.set('photo', data);

            var date = new Date();
            var user = Meteor.userId();
            var pic = Meteor.user().profile.picture;
            var name = Meteor.user().profile.name;
            var fbid = Meteor.user().profile.facebookId;

            Highlights.insert({
                createdAt: date,
                media: data,
                mediaType: 'Photo',
                memoryId: Router.current().params.id,
                owner: user,
                ownerName: name,
                ownerPic: pic,
                fbookId: fbid
            });
        });
    }
});

Template.quickButtons.helpers({
    'photo': function () {
        return Session.get('photo');
    },
    'address': function () {
        return Session.get('location');
    }
});

Template.highlight.helpers({
    highlight: function () {
        var paramsId = Router.current().params.id;
        var highlights = Highlights.find({memoryId: paramsId}, { sort: {createdAt: -1}}).fetch();

        for (i = 0; i < highlights.length; i++) {
            if (highlights[i].mediaType === 'Photo') {
                highlights[i].image = true;
            }
            if (highlights[i].mediaType === 'Text') {
                highlights[i].status = true;
            }
            if (highlights[i].mediaType === 'Video') {
                highlights[i].video = true;
            }
            if (highlights[i].mediaType === 'Audio') {
                highlights[i].audio = true;
            }
        }

        return highlights;
    }
});

Template.memoryTimeline.events({
    "submit .status": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
    var text = event.target.text.value;
    var date = new Date();
    var user = Meteor.userId();
    var pic = Meteor.user().profile.picture;
    var name = Meteor.user().profile.name;
    var fbid = Meteor.user().profile.facebookId;

     Highlights.insert({
        createdAt: date,
        media: text,
        mediaType: 'Text',
        memoryId: Router.current().params.id,
        owner: user,
        ownerName: name,
        ownerPic: pic,
        fbookId: fbid
    });

      // Clear form
      event.target.text.value = "";
    }
});
