const express = require('express')
const router = express.Router()
const pool = require ('../database')
router.get('/', (req, res) =>{
    res.render('index.hbs')
})

router.get('/anadir', (req, res) => {
    res.render('formulario.hbs')
})
router.post('/anadir', async (req, res) =>{
    const {titulo, descripcion, fecha, imagen} = req.body
    const imagenNueva = {
        titulo,
        descripcion,
        fecha,
        imagen
      }
    await pool.query('INSERT INTO img SET ?', [imagenNueva])
    console.log(req.body)
    res.redirect('/fotos')
} )
router.get('/fotos', async (req, res) => {
    res.render('fotos/fotos.hbs')
    const [imagen] = await pool.query('SELECT * FROM img')
    console.log(imagen)
})
module.exports = router