var express = require("express"),
    mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Mfz9iwmxBkCxRuD@cluster0.ohjzi.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
var User = require("./models/user")

app = express();



app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("landing");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Server is online...");
});