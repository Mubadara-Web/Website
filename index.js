var express = require("express"),
    mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Mfz9iwmxBkCxRuD@cluster0.ohjzi.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
var User = require("./models/user")

app = express();



app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/about", function(req, res) {
    res.render("about_us");
});

app.get("/services", function(req, res) {
    res.render("our_services");
});

app.get("/join", function(req, res) {
    res.render("join_us");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Server is online...");
});