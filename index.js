var express = require("express"),
    app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("landing");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Server is online...");
});