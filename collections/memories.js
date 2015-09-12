Memories = new Mongo.Collection('memories');
if (Meteor.isClient) {
    // This code only runs on the client
    Template.create.helpers({
        memories: function () {
            return Memories.find({});
        }
    });
    Template.create.events({
        "submit .newMemory": function (event) {
            console.log(event);
            console.log("Form submitted");
            console.log(event.target.text);

            function delay(ms) {
                ms += new Date().getTime();
                while (new Date() < ms) {}
            }
            delay(5000);
            //      // Prevent default browser form submit
            //      event.preventDefault();
            //        
            // 
            //      // Get value from form element
            //      var text = event.target.text;
            //        console.log(text);
            // 
            //      // Insert a task into the collection
            //      Memories.insert({
            //        text: text,
            //        createdAt: new Date() // current time
            //      });
            // 
            //      // Clear form
            //      event.target.text.value = "";
        }
    });
}