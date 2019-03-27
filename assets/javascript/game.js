var database = firebase.database();


var name = "";
var role = "";
var start = "";
var rate = "";

$("#submit-btn").on("click", function (event) {
   event.preventDefault();

   // getting data
   var name = $("#name-input").val().trim();
   var role = $("#role-input").val().trim();
   var start = $("#time-input").val().trim();
   var rate = $("#rate-input").val().trim();

   // input new values into database
   database.ref().push({
       name: name,
       role: role,
       start: start,
       rate: rate
   });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
database.ref().on("child_added", function (childSnapshot) {
   console.log(childSnapshot.val().name);
   console.log(childSnapshot.val().role);
   console.log(childSnapshot.val().start);
   console.log(childSnapshot.val().rate);

   // add the data to the table with id= emplData

   $("#emplData").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().start + "</td><td>" + "Months Worked" + "</td><td>" + childSnapshot.val().rate + "</td><td>" + "Total Billed" + "</td></tr>");



   // $("#full-member-list").append("<div class='well'><span class='member-name'> " +
   //     childSnapshot.val().name +
   //     " </span><span class='member-role'> " + childSnapshot.val().role +
   //     " </span><span class='member-start'> " + childSnapshot.val().start +
   //     " </span><span class='member-rate'> " + childSnapshot.val().rate +
   //     " </span></div>");

   // Handle the errors
}, function (errorObject) {
   console.log("Errors handled: " + errorObject.code);


});