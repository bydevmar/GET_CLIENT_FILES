module.exports = (sequelize , DataTypes ) => {
  const Utilisateurs = sequelize.define( "Utilisateurs" , {
    utilisateur_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_utilisateur: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mot_de_passe: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
  return Utilisateurs;
}

