
// Constructs the User model
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // User Email - used as username
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        // First and Last Name
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // User Current Zipcode -
        // used to locate new job opportunities 
        
    });

    User.associate = models => {
        models.User.hasMany(models.Application, {
            onDelete: "cascade"
        });
    }

    return User;
};


