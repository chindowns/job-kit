module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define("Application", {
        // Job Title - "Software Engineer"
        company: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        source: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resume: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateApplied: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        stage: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
    Application.associate = models => {
        models.Application.hasMany(models.Note)
    };
    return Application;
}

