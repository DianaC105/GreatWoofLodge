var path = require("path");

module.exports = function(app) {
    app.get ("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..parallax-template/index.html"))
    });

    app.get("/customer", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/login.html"));
    });

    // app.get("/dog", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/dogs.html"));
    // });


}