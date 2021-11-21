const express = require('express');
const path = require('path'); 
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views')); //hay que decir donde estan las vistas, 
                                               //por eso le decimos en donde esta el path
                                                //dirname me dice donde esta el src en este caso

//para todo el motor de plantilla
app.engine('.hbs', exphbs.engine({ 
    defaultLayout: 'main',
    layoutsDir:  path.join(app.get('views'), 'layouts' ), //hay que darle el path de donde estan los layouts
    partialsDir: path.join(app.get('views'), 'partials'), //los partials son pequeñas partes de html que podemos reutilizar en cualquier vista
    extname: '.hbs' //sirve para colocar que extension vana  tener estos archivos
})); //estas propiedades sirven para saber de que manera vamos a utilizar las pistas
//como vamos a tener muchas pistas (htmls) todos esos archviso van a tener cosas en comun,
//para ello se utliza la plantilla donde se coloca el dieño principal y a aparte las diferencias
//entocnes para eso se crea el por defecto llamado main
app.set('view engine', '.hbs'); //para utilizar el motor hbs

//Middlewares
app.use(express.urlencoded({extended:false}));//sirve para cuando un formulario envie algo, se pueda entender
                                              //por ejemplo si un usuario se registra, envia el email y contraseña,
                                              //al decirle extended: false te aseguras de recibir solo los datos, no imagnes y cosas

app.use(methodOverride('_method')); //para poder usar los put y delete  (no solo get y post)                                         

app.use(session({
    secret: 'mysecretapp', //palabra que solo nosotros sabemos
    resave : true,
    saveUninitialized: 'true'
})); // nos va a permitir poder autentificar usuarios y guardalo temporalmente

//Global variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//Static files

//Server is listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});