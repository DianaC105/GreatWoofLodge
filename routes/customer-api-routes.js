var db = require("../models");

module.exports = function(app) {
    app.get("/api/customer", function(req, res) {
        db.Customer.findAll({
            include: [db.Dogs]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.get("api/customer/:id", function(req, res) {
        db.Customer.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Dogs]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.post("api/customer", function(req, res) {
        db.Customer.create(req.body).then(function(dbCustomer) {
            res.json(dbCustomer);
            
        });
    });

    app.delete("api/customer/:id", function(req, res) {
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });
}