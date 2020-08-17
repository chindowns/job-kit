module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define("Application", {
        // Job Title - "Software Engineer"
        title: {
            type: DataTypes.STRING,
            allowNull: false
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

    return Application;

}

