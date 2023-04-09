

module.exports = (sequelize, DataTypes) => {
    const ADRESSES = sequelize.define('ADRESSES', {
      adresse_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      adresse : {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      ville: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      codepostal : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pays : {
        type: DataTypes.STRING(255),
        allowNull: false,
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
  
    return ADRESSES;
  };
  