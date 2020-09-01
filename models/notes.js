module.exports = function(sequelize, DataTypes) {
    const Note = sequelize.define("Note", {
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

    return Note;
}