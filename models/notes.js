module.exports = function(sequelize, DataTypes) {
    const Note = sequelize.define("Note", {
        contact: {
            type: DataTypes.STRING
        },
        note: {
            type: DataTypes.TEXT
        }        
    }, { timestamps: false });

    Note.associate = models => {
        models.Note.belongsTo(models.Application)
    };

    return Note;
}