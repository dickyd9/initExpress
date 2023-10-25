"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    queryInterface.addColumn(
      "gallery", // table name
      "size", // new field name
      {
        type: DataTypes.STRING,
        allowNull: true,
      }
    )
  },

  async down(queryInterface, DataTypes) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
