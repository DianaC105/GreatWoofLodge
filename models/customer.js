module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        pet_name: DataTypes.STRING,
        breed: DataTypes.STRING,
        service: DataTypes.STRING,
        needs: DataTypes.STRING
    });

    Customer.associate = function(models) {
        Customer.hasMany(models.Dog, {
            onDelete: "cascade"
        });
    };
    return Customer;
}

