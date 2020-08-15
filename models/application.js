module.exports = function (sequelize, DataTypes) {
    var Application = sequelize.define("Application", {
        // Job Title - "Software Engineer"
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
                // Job Description
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        
        //Link to job posting
        source: {
            type: DataTypes.STRING,
            allowNull: true
        },

        resume: {
            type: DataTypes.STRING,
            allowNull: true
        }
     
    });

    Application.associate = models => {
        
        models.Application.hasMany(models.Notes, {
            onDelete: "cascade"
        });
    }

    return Application;

}

