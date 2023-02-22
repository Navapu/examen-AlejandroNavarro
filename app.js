const express = require ('express')
const path = require('path')
const {engine} = require('express-handlebars')
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir:  path.join(app.get('views'), 'layouts'),
  partialsDir:  path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index')
app.listen(3000)
console.log('Escuchando en el puerto 3000')


app.use('/', indexRouter)
module.exports = app