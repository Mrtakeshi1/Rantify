const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const path = require("path")

app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.set('strictQuery', false)
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true }
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']})) // req.user
app.use('/api/post', require('./routes/postRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  } 
  return res.send({errMsg: err.message})
})


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})