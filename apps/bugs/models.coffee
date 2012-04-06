mongoose = require 'mongoose'

mongoose.connect 'mongodb://localhost/wizard'

Schema = mongoose.Schema
ObjectId = mongoose.ObjectId

Models = {}

BugSchema = new Schema
  body: String
  created_at: Date

Models.Bug = mongoose.model 'Bug', BugSchema

module.exports = Models