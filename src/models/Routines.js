const { Datatypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('routines', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        staff: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        duration: {
            type: Datatypes.INTEGER,
            get(){
                return this.getDataValue('duration') + ' minutos'
            }
        },
        difficulty: {
            type: Datatypes.INTEGER,
            validate: { min: 1, max: 5 },
            allowNull: false,
        },
        category: {
            type: Datatypes.ENUM('Cardio/Resistencia', 'Masa Muscular', 'Postura', 'Bajada de Peso', 'Definición'),
            allowNull: false,
        },
        day: {
            type: Datatypes.INTEGER,
            validate: { min: 1, max: 7 },
            allowNull: false,
        },
    },
        {
            timestamps: false,
        }
    )
}
