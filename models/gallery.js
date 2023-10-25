"use strict"

module.exports = function (sequelize, DataTypes) {
  const Gallery = sequelize.define(
    "gallery",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      link: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    }
  )

  return Gallery
}

// npx sequelize-cli db:migrate