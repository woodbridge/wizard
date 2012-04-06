Bugs = require('../bugs/models')

routes = (app) ->
  app.get '/', (req, res) ->
    res.write("This is the wizard app.")
    res.end()

module.exports = routes