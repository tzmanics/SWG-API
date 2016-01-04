const Hapi = require('hapi')

const Models = require('./models')
const Routes = require('./lib/routes')
const Server = new Hapi.Server()

var port = process.env.PORT || 3000

Server.connection({ port: port })
Server.route(Routes)

Models.sequelize.sync().then(function () {
  Server.start(function () { console.log('Running on', port) })
})
