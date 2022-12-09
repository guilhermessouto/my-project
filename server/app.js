require('dotenv').config()

// Models
  const express = require('express')
  const cors = require('cors')
  const mongoose = require('mongoose')
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')
  const User = require('./models/User')
  const app = express()

// Config
  // JSON response
    app.use(express())
  
  // Middleware
    app.use(cors())

  // Body Parser
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

   // Open Route - Public Route
   app.get('/', (req, res) => {
    res.status(200).json({msg: 'hi'})
  })

  // Private Route
    app.get('/user/:id', checkToken, async (req, res) => {
      const id = req.params.id

      // checar se o usuário existe
        const user = await User.findById(id, '-password')

        if(!user) 
          return res.status(404).json({error_message: 'Usuário não encontrado"'})

      res.status(200).json({ user })
    })

  // checar o token
    function checkToken(req, res, next) {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]

      if(!token)
        return res.status(401).json({error_message: 'Acesso negado!'})

      try {
        const sceret = process.env.SECRET

        jwt.verify(token, sceret)

        next()

      } catch (error) {
        res.status(400).json({error_message: 'Token inválido!'})
      }

    }

  // Register User
  app.post('/auth/register', async (req, res) => {
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
      const user = new User({
        email,
        password: passwordHash
      })

    try {
      await user.save()
      res.status(201).json({msg: 'cria1111111111do'})
      
    } catch (error) {

      return res.status(500).json({msg: 'error'})
    }
  })

  // Login User
    app.post('/auth/login', async (req, res) => {
      const { email, password } = req.body

      // checar se o usuario existe
        const user = await User.findOne({ email: email })

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

        res.status(200).json({message: 'Autenticação realizada com sucesso', token})
        
      } catch (error) {
        
        console.log(error)
        return res.status(500).json({msg: 'error'})
      }
      
    })

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


//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTI4MDE2ODA0Njg5NzM1YjJlN2IyMiIsImlhdCI6MTY3MDU0NzkyMX0.r7YLIBgO_xjBjzephnaD4nf_J0dYt0QRT2ueFFazYn0"