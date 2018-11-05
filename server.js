
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 9000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var friendsArray = [
  {
    Name: "Saima",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5,1,4,4,5,1,2,5,4,1]      
  },{
    Name: "Ahmad",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5,2,4,4,4,2,2,5,4,1]      
  },{
  Name:"Joey",
  photo:"https://www.google.com/search?tbm=isch&q=google+images+joey&chips=q:google+images+joey,online_chips:joey+king&usg=AI4_-kRV0R2niu0OzSO1A7TFo_L0LFWQnQ&sa=X&ved=0ahUKEwiV9KqU6LzeAhVCSq0KHd3KCkUQ4lYIMigE&biw=1431&bih=674&dpr=2#imgrc=u_8nvuxcd0AGXM:",
  scores:[5,4,3,4,5,1,2,3,2,1]
},{
  Name:"Sam",
  photo:"https://www.google.com/search?tbm=isch&source=hp&biw=1431&bih=674&ei=GP3fW4STBpHysQXqqqeYCQ&q=sam&oq=sam&gs_l=img.3..0l10.2813.3396..5354...0.0..1.65.180.3......3....1..gws-wiz-img.....0.Pe8V_Sxav5I#imgrc=WPmiqG5ad6birM:",
  scores:[1,4,3,4,5,2,2,4,2,1]
},{

  Name:"Andrea",
  photo:"https://www.google.com/search?tbm=isch&source=hp&biw=1431&bih=674&ei=GP3fW4STBpHysQXqqqeYCQ&q=andrea&oq=andrea&gs_l=img.3..0l10.3414.4945..6228...0.0..1.60.342.6......3....1..gws-wiz-img.....0.6HO-c4Fm5vE#imgrc=9N86GZOQB2BbNM:",
  scores:[5,4,3,4,2,1,2,3,4,1]
}

];


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
 //var friendsArray= require("./data/friends");
//  require("./friends/friendsArray");
// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
app.get("/api/friendsArray", function(req, res) {
  return res.json(friendsArray);
});

// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});





// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

