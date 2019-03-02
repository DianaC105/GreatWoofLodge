var path = require("path");

module.export = function(app) {
    app.get ("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/index.html"))
    });

    app.get("/customer", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/customer.html"));
    });

    app.get("/dogs", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/dogs.html"));
    });


}