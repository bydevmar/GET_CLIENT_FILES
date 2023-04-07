

module.exports = (sequelize, DataTypes) => {
    const CLIENTS = sequelize.define('CLIENTS', {
      client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom_client: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      prenom_client: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      datenaissance_client : {
        type: DataTypes.DATE,
        allowNull: false,
      },
      telephone_client: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      adresse_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      adresse_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "adresses",
          key: 'adresse_id',
        },
      },
      utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "UTILISATEURS",
          key: 'utilisateur_id',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
    });
  
    return CLIENTS;
  };
  