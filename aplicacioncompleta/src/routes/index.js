//iran las url de mi pag principal /about ,
//cualquier persona pueda acceder

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Index');
    res.render('index');
}); //creamos la ruta

router.get('/about', (req,res) => {
    //res.send('About');
    res.render('about');//se manda el about.hbs en views
});

module.exports = router;