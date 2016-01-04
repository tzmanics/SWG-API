var Orders
module.exports = function (sequelize, DataTypes) {
  Orders = sequelize.define('Orders', {
    orderNumber: DataTypes.STRING,
    items: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Orders.hasMany(models.Items)
      }
    }
  })
  return Orders
}
