var Items
module.exports = function (sequelize, DataTypes) {
  Items = sequelize.define('Items', {
    category: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Items
}
