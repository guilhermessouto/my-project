const mongoose = require('mongoose')

const User = mongoose.model('User', {
  email: String,
  password: String,
  confirmPasswrod: String
})

module.exports = User