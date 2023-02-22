const express = require('express')
const router = express.Router()
const pool = require ('../database')
router.get('/', async (req, res) =>{
    res.render('index.hbs')
})

router.get('/anadir', (req, res) => {
    res.render('formulario.hbs')
})
router.post('/anadir', async (req, res) =>{
    const {titulo, descripcion, fecha, imagen} = req.body
    const megusta = 0
    const nomegusta = 0
    const imagenNueva = {
        titulo,
        descripcion,
        fecha,
        imagen,
        megusta,
        nomegusta
      }
    await pool.query('INSERT INTO img SET ?', [imagenNueva])
    res.redirect('/fotos')
} )
router.get('/fotos', async (req, res) => {
    const [imagen] = await pool.query('SELECT * FROM img')
    console.log(imagen)
    res.render('fotos.hbs', {imagen})
})
router.get('/fotos/delete/:id', async (req, res)=>{
    const {id} = req.params
    await pool.query('DELETE FROM img WHERE id = ?', [id])
    res.redirect("/fotos")
})
router.get('/fotos/edit/:id', async (req, res) => {
    const {id} = req.params
    const [imagen] = await pool.query('SELECT * FROM img WHERE id = ?', [id])
    console.log(imagen)
    res.render('edit.hbs', {imagen:imagen[0]})
})
router.post('/fotos/edit/:id', async (req, res) => {
    const {id} = req.params
    const {titulo, descripcion, fecha, imagen} = req.body
    const imagenNueva = {
        titulo,
        descripcion,
        fecha,
        imagen
      }
    await pool.query('UPDATE img SET ? WHERE id = ?', [imagenNueva, id])
    res.redirect('/fotos')
})
 router.get('/fotos/like/:id', async (req, res) => {
     const {id} = req.params
     await pool.query('UPDATE img SET megusta = megusta +1 WHERE id = ?',[id])
     const [imagen] = await pool.query('SELECT megusta FROM img WHERE id = ?', [id])
     console.log(imagen)
     res.render('like.hbs', {imagen:imagen[0]})
 })
 router.get('/fotos/dislike/:id', async (req, res) => {
    const {id} = req.params
    await pool.query('UPDATE img SET nomegusta = nomegusta + 1 WHERE id = ?',[id])
    const [imagen] = await pool.query('SELECT nomegusta FROM img WHERE id = ?', [id])
    console.log(imagen)
    res.render('dislike.hbs', {imagen:imagen[0]})
})
router.get('/fotos/votadas', async (req, res) => {
    const [imagen] = await pool.query('SELECT * FROM img ORDER BY megusta DESC LIMIT 3')
    res.render('votadas.hbs', {imagen})
})
router.get('/fotos/novotadas', async (req, res) => {
    const [imagen] = await pool.query('SELECT * FROM img ORDER BY megusta ASC LIMIT 3')
    res.render('novotadas.hbs', {imagen})
})
module.exports = router