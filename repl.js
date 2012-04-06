#! /usr/local/bin/node

require('coffee-script')

var repl = require('repl');
var context = repl.start('> ').context;

context.Bugs = {}
context.Bugs.Models = require('./apps/bugs/models.coffee')