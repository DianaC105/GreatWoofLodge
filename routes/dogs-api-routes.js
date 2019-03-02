var db = require("../models");

module.exports = function(app) {
    app.get("/api/dogs", function(req, res) {
        var query = {};
        if (req.query.customer_id) {
            query.CustomerId = req.query.customer_id;
        }
        db.Dogs.findAll ({
            where: query,
            include: [db.Customer]
        }).then(function(dbDogs) {
            res.json(dbDogs);
        });
    });

    app.get("/api/dogs/:id", function(req, res) {
        db.Dogs.findOne({
            where: {
                id: req.params.id
            },
            include: [dbCustomer]
        }).then(function(dbDogs) {
            res.json(dbDogs);
        });
    });

    app.post("api/posts", function(req, res) {
        db.Dog.create(req, res).then(function(dbDogs) {
            res.json(dbDogs)
        });
    });

    app.delete("/api/dogs/:id", function(req, res) {
        db.Dogs.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbDogs) {
            res.json(dbDogs);
        });
    });

    app.put("/api/dogs", function(req, res) {
        db.Dogs.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbDogs) {
            res.json(dbDogs);
        });
    });
}