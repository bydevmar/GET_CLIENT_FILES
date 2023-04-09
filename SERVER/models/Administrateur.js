

module.exports = (sequelize, DataTypes) => {
    const Administrateur = sequelize.define('ADMINISTRATEURS', {
      administrateur_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom_administrateur: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      prenom_administrateur: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      datenaissance_administrateur: {
        type: DataTypes.DATE,
        allowNull: false,
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
  
    return Administrateur;
  };
  