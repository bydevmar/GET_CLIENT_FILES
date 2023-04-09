module.exports = (sequelize, DataTypes) => {
    const Entreprises_Exercices = sequelize.define("ENTREPRISES_EXERCICES", {
        e_e_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        entreprise_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ENTREPRISES',
                key: 'entreprise_id'
            }
        },
        exercice_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'EXERCICES',
                key: 'exercice_id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        }
    });
    return Entreprises_Exercices;
}

