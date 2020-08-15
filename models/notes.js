module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        // First and Last Name
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        notes: {
            type: DataTypes.TEXT
        },
        
    });

    return Contact;
}