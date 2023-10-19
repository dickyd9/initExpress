"use strict"

module.exports = function (sequelize, DataTypes) {
  const Blog = sequelize.define(
    "blogs",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      blogImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      blogTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blogDesc: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      blogStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
    }
  )

  return Blog
}
