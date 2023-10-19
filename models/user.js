"use strict"

const secrets = [
  "password",
  "emailVerificationToken",
  "status",
  "createdAt",
  "updatedAt",
  "deletedAt",
]

const bcrypt = require("bcryptjs")

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      auth_token: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      email_verification_token: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
      freezeTableName: true
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["password"],
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, "a")
            user.password = bcrypt.hashSync(user.password, salt)
          }
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, "a")
            user.password = bcrypt.hashSync(user.password, salt)
          }
        },
      },
      instanceMethods: {
        validPassword: (password) => {
          return bcrypt.compareSync(password, this.password)
        },
      },
    }
  )
  User.beforeCreate((user, option) => {
    if (user.isNewRecord) {
      const salt = bcrypt.genSaltSync()
      const hash = bcrypt.hashSync(user.getDataValue("password"), salt)

      // user.password = hash; Not working
      user.setDataValue("password", hash) // use this instead
    }
  })

  User.prototype.validPassword = async (password, hash) => {
    return await bcrypt.compareSync(password, hash)
  }

  User.prototype.purge = function () {
    const clean = {}
    for (const key of Object.keys(this.dataValues)) {
      if (!secrets.includes(key)) {
        clean[key] = this.dataValues[key]
      }
    }
    return clean
  }

  return User
}
