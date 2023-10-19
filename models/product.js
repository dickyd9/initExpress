"use strict"

module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define(
    "product",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productImage: {
        type: DataTypes.TEXT,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productLink: {
        type: DataTypes.TEXT,
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

  return Product
}
