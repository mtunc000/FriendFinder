

var express = require("express");
var path = require('path');
var app = express();
var PORT = 9000;
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsArray= require("../data/friendsArray");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (friendsArray.length < 10) {
      friendsArray.push(req.body);
      res.json(true);
    }
    
  });

 

  app.post("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
 
//-----------------------------------------------------

  // Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friendsArray);
  });
  
  // Displays a single character, or returns false
  app.get("/api/friends/:friends", function(req, res) {
    let chosen = req.params.friendsArray;
  
    console.log(chosen);
  
    for (var i = 0; i <friendsArray.length; i ++){
       
      if (chosen === friedsArray[i].routeName) {
        return res.json(friendsArray[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let newFriends = req.body;
  


                    $(".submit").on("click", function(event) {
              event.preventDefault();
                   
                    
                      // Create an object for the user"s data
                      newFriends = {
                        name: $("#name").val(),
                        photo: $("#photo").val(),
                        scores: [
                          $("#q1").val(),
                          $("#q2").val(),
                          $("#q3").val(),
                          $("#q4").val(),
                          $("#q5").val(),
                          $("#q6").val(),
                          $("#q7").val(),
                          $("#q8").val(),
                          $("#q9").val(),
                          $("#q10").val()
                        ]
                      };
                      console.log(userData);
  
    console.log(newFriends);
  
    // We then add the json the user sent to the character array
    friendsArray.push(newFriends);
  
    // We then display the JSON to the users
    res.json(newFriends);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });