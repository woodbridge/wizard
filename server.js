
/**
 * Module dependencies.
 */

var express = require('express')
  , eco    = require('eco')
  , fs = require('fs')
  , coffee = require('coffee-script');


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.register('.eco', eco);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes


// Development route for compiling and serving app client code.
app.get('/js/:app/client.js', function(req, res) {
  res.header('Content-Type', 'application/x-javascript')
  dir = req.params.app
  path = "./apps/" + dir + "/client.coffee"
  raw = fs.readFileSync(path, "ascii")
  res.write(coffee.compile(raw));
  res.end()
});


require('./apps/bugs/routes')(app);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
