module.exports = (sequelize, DataTypes) => {
    const DOCUMENTS = sequelize.define("DOCUMENTS", {
        document_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_document: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        chemin_document: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        ajout_par: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'UTILISATEURS',
                key: 'utilisateur_id'
            }
        },
        exercice_id : {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    return DOCUMENTS;
}

