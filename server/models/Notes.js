const mongoose = require('mongoose')

const Notes = mongoose.model('Note', {
  category: String || null,
  title: String || null,
  text: String,
  owner: {
    email: String,
    _id: String
  }
})

module.exports = Notes