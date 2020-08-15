
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
        
    });

    User.associate = models => {
        models.User.hasMany(models.Application, {
            onDelete: "cascade"
        });
    }

    return User;
};


