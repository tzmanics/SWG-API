const Fs = require('fs')
const Path = require('path')
const Sequelize = require('sequelize')

const basename = Path.basename(module.filename)

var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]
var db = {}
var sequelize

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable])
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

Fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
}).forEach(function (file) {
  var model = sequelize['import'](Path.join(__dirname, file))
  db[model.name] = model
})

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
