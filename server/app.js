require('dotenv').config()

// Models
  const express = require('express')
  const cors = require('cors')
  const mongoose = require('mongoose')
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')
  const admin = require('./routes/admin')
  const app = express()
  
// Config
  // JSON response
    app.use(express())
  
  // Middleware
    app.use(cors())

  // Body Parser
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

   // Routes
   app.use('/', admin)  

  // Credenciais
    const dbUser = process.env.DB_USER
    const dbPassword = process.env.DB_PASS
  
  // Mongoose
    mongoose.set('strictQuery', false)

    mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.gwyeptz.mongodb.net/?retryWrites=true&w=majority`
    )
      .then(() => {
        app.listen(3000)
      })
      .catch(err => console.log(err))