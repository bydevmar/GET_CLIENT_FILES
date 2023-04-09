module.exports = (sequelize, DataTypes) => {
    const Entreprises = sequelize.define("ENTREPRISES", {
        entreprise_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_entreprise: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telephone_entreprise: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_entreprise: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //
        emplacement_entreprise: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "adresses",
                key: 'adresse_id',
            },
        },
        Industrie_entreprise: {
            type: DataTypes.STRING,
            allowNull: false
        },

        //Ce serait le chiffre d'affaires annuel ou le revenu de l'entreprise.
        Revenu: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        proprietaire_entreprise: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "CLIENTS",
                key: 'client_id',
            },
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
    return Entreprises;
}

