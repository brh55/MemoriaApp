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

        console.log(description);
        Memories.insert({
            title: title,
            description: description,
            owner: Meteor.userId()
        });
        // function delay(ms) {
        //     ms += new Date().getTime();
        //     while (new Date() < ms) {}
        // }
        // delay(5000);
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
