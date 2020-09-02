module.exports = function(sequelize, DataTypes) {
    const Note = sequelize.define("Note", {
        // First and Last Name
        contact: {
            type: DataTypes.STRING
        },
        note: {
            type: DataTypes.TEXT
        }        
    });

    return Note;
}