var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://admin:Mfz9iwmxBkCxRuD@cluster0.ohjzi.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
var User = require("./models/user")

app = express();
app.use(bodyParser.urlencoded({ extended: true }));


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
// Test user
// username: Test
// email: test@test.test
// password: pass

// sign up logic
app.post("/register", function(req, res) {
    var newUser = new User({ username: req.body.username, email: req.body.email });
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/");
        });
    });
    console.log("new user registered");
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