Models = require('./models')

routes = (app) ->
  app.get '/', (req, res) ->
    res.render "#{__dirname}/views/index.eco"

  app.get '/seed', (req, res) ->
    attrs = [
      { body: "This is a test.  You are a test.  We all are tests."},
      { body: "I was thinking about playing minecraft then I realized you are ugly."}
    ]

    for attr in attrs
      bug = new Models.Bug
      bug.body = attr['body']
      bug.save()

    res.write "Seeded. #{attrs}"
    res.end()


  # JSON API for bugs.

  app.get '/bugs', (req, res) -> Models.Bug.find (err, bugs) -> res.json bugs

  app.get '/bugs/:id', (req, res) ->     
    Models.Bug.findById req.params.id, (err, bug) -> res.json bug

module.exports = routes