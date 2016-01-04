const Models = require('../models')

exports.orders = {
  all: function (req, res) {
    Models.Orders.findAll().then(function (orders) {
      res(orders).code(200)
    })
  }
}

