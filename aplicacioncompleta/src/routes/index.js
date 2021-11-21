//iran las url de mi pag principal /about ,
//cualquier persona pueda acceder

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index');
}); //creamos la ruta


module.exports = router;