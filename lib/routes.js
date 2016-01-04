const Api = require('./api')

module.exports = [
  { method: 'GET', path: '/api/orders', handler: Api.orders.all }
]
