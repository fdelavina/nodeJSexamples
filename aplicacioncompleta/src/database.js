//se va a utilizar mongodb para la base de datos
//mongoose es para conectarse a la base de datos
//mongodb hay que instalarlo a parte e inicializarlo

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notesdb-app')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


