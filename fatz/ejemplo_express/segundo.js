const express = require('express');
const morgan = require('morgan');
const app = express(); //se ejecuta express y se devuelve un obj
                       //que es un servidor

function logger(req,res,next) //middleaware a mano para  cualquier peticion que llege
{
    console.log('request received befoure enrouting');
    console.log(`route received: ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

//settings
app.set('AppName','ejemplo primero tutorial');
app.set('port',3000);
app.set('view engine','ejs');


//midleawares
app.use(express.json()); //necesario para usar las recepciones .json
app.use(logger);
app.use(morgan('dev'));
app.all('/user', (req,res,next) =>{
    console.log('estoy pasando por aqui');
    
    next(); //para seguir con la ruta, si no se pone esto
            //se planta aqui
}); //para cualquier ruta nosotros podemos hacer algo
          //antes de ir a esas rutas (en este caso antes de
          //pasar por la ruta user)


//routes
app.get ('/', (req,res) =>{
    const data = [{name: 'fran'},{name: 'david'},{name: 'luis'}];
    res.render('index.ejs', {people : data});
});

app.get('/user', (req,res)=>{
   res.json({ //tambien se puede mandar json
       username: 'Franhisco',
       apellido : 'de la vina'
   });
}) 

app.post('/user',(req,res)=>{
    console.log(req.body); //lee el objeto que envia el cliente
                           //
   res.send('post request received');
});

app.post('/user/:id',(req,res)=>{
    console.log(req.body); //lee el objeto que envia el cliente
    console.log(req.params)   // lee el id
   res.send('post request received');
});

app.delete('/user/:userId', (req,res)=>{
    res.send('User ${req.params.userId} has been deleted' );
});

app.use(express.static('public'));

app.listen(app.get("port"), ()=> {
    console.log(app.get('AppName'));
   console.log('servidor en puerto 3000');
});