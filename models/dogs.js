module.exports = function(sequelize, DataTypes) {
    var Dogs = sequelize.define("Dogs", {
        dog_name: DataTypes.STRING,
        customer_name: DataTypes.STRING

    });

    Dogs.associate = function(models) {
        Dogs.belongsTo (models.Customer, {
            foreignKey: {
                allowNull: false
            }
            
        });
    };

    return Dogs;
};