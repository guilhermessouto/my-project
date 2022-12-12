require('dotenv').config()

// Models
  const express = require('express')
  const router = express.Router()
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')
  const User = require('../models/User')

// Private Route
  router.get('/user', checkToken, async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    const secret = process.env.SECRET

    const decoded = jwt.verify(token, secret)

    const { id } = decoded

    // checar se o usuário existe
    const user = await User.findById(id, '-password')

    if(!user) 
      return res.status(404).json({error_message: 'Usuário não encontrado'})

    res.status(200).json({user})
  })

  router.get('/any', (req, res) => {
    res.send({msg: req.headers})
  })

// checar o token
  function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token)
      return res.status(401).json({error_message: 'Acesso negado!'})

    try {
      const secret = process.env.SECRET

      jwt.verify(token, secret)

      next()

    } catch (error) {
      res.status(400).json({error_message: 'Token inválido!'})

    }

  }

// Register User
  router.post('/auth/register', async (req, res) => {
    const { email, password, confirmPassword } = req.body

    // checar se o email ja existe
      const userExists = await User.findOne({ email: email })

      if(userExists)
        return res.status(422).json({error_message: 'E-mail já está em uso!'})

    // checar se as senhas sao iguais
      if(password !== confirmPassword)
        return res.status(422).json({error_message: 'As senhas não coincidem!'})

    // criar senha hash
      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(password, salt)

    // criar usuario
      let user = new User({
        email,
        password: passwordHash
      })

    try {
      await user.save()

      const secret = process.env.SECRET

      const token = jwt.sign({
          id: user._id,

        }, 
        secret,
      )

      user = user.toObject()

      delete user.password
      delete user.__v

      res.status(200).json({
        message: 'Autenticação realizada com sucesso', 
        token,
        user
      })
  
    } catch (error) {

      return res.status(500).json({msg: 'error'})
    }
  })

// Login User
  router.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    // checar se o usuario existe
      let user = await User.findOne({ email: email })

      if(!user)
        return res.status(422).json({error_message: 'E-mail não encontrado!'})

    // checar se a senha coincide
      const checkPassword = await bcrypt.compare(password, user.password)

      if(!checkPassword)
        return res.status(422).json({error_message: 'Senha inválida!'})

    try {
      const secret = process.env.SECRET

      const token = jwt.sign({
          id: user._id,

        }, 
        secret,
      )

      user = user.toObject()

      delete user.password
      delete user.__v

      res.status(200).json({
        message: 'Autenticação realizada com sucesso', 
        token,
        user
    })

    } catch (error) {
      
      console.log(error)
      return res.status(500).json({msg: 'error'})
    }
    
  })

// Open Route - Public Route
  router.get('/', (req, res) => {
    res.status(200).json({msg: 'hi'})
  })  

module.exports = router