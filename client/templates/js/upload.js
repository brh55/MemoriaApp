Template.upload.events({
    'click .mic':function(){
        //create a web audio context in your application
var audioContext = new AudioContext();
var myWebAudioNode = audioContext.createGain();

//to access the microphone, pass the audio context and your callbacks functions
var microphone = new Microphone({
    audioContext: audioContext,
    onSuccess: function() {
        //connect the microphone to the rest of your web audio chain (microphone includes intermediate ScriptProcessorNode for onNoSignal and onAudioData handler)
        microphone.connect(myWebAudioNode);
        myWebAudioNode.connect(audioContext.destination);

        // instead you can also connect directly to its sourceNode, if you don't need onAudioData and onNoSignal handler methods
        // microphone.sourceNode.connect(myWebAudioNode);

        console.log("Mic access successfull!");
    },
    onReject: function() {
        console.error("Mic access rejected");
    },
    onNoSignal: function(){
        console.error("No signal received so far, check your systems settings!");
    },
    onNoSource: function(){
        console.error("No getUserMedia and no Flash available in this browser!");
    },
    onAudioData: function(audioData){
        doSomeFancyStuffWith(audioData);
    }
});
    };
});
