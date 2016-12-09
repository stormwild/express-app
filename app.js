var express = require("express");

var app = express();

app.get("/", function(request, response) {

response.send("Hello, world!");

});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log("Express app started on port " + process.env.PORT || 3000 + ".");
});