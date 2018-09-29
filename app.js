let express = require("express");
let app = express();



app.get("/", function(req ,res) {
  res.render("home.ejs");
  // render will take on whatever the response param is (res) in this case. Then mkdir "views"; Then touch "views/home.ejs". Express will be looking for whatever is in the view dir.
});

app.get("/fallinlovewith/:thing", function(req, res){
  let thing = req.params.thing;
  res.render("love.ejs", {
    varThing: thing
  });
});

let server = require('http').createServer(app);
      server.listen(5000);{
        console.log("Sever Ready!");
      }