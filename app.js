const express = require ('express')
const app = express()
const indexRouter = require('./routes/index')
app.listen(3000)
console.log('Escuchando en el puerto 3000')



app.use('/', indexRouter)
module.exports = app