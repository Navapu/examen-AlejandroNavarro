const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index.hbs')
})

router.get('/anadir', (req, res) => {
    res.render('formulario.hbs')
})
router.post('/anadir',(req, res) =>{
    console.log(req.body)
    res.redirect('/fotos')
} )
router.get('/fotos', (req, res) => {
    res.render('fotos/fotos.hbs')
})
module.exports = router