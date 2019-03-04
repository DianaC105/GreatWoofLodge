var db = require("../models");

module.exports = function(app) {
    app.get("/api/customer", function(req, res) {
        db.Customer.findAll({
            include: [db.Dog]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.get("/api/customer/:id", function(req, res) {
        db.Customer.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Dog]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.post("/api/customer", function(req, res) {
        db.Customer.create({
            customer_name: req.body.customer_name,
            password: req.body.password,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            pet_name: req.body.pet_name,
            breed: req.body.breed
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
            console.log(dbCustomer);
            
        });
    });

    app.delete("/api/customer/:id", function(req, res) {
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });
}