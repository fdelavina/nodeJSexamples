/*const { read } = require('fs');
const http = require('http');

const server = http.createServer( (req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');

});

server.listen(3000, () => {
    console.log('server on port 3000');
});


/////////////////////7
asi esta bien, pero a medida que la app se va
complicando, va a ser todo menos mantenible y
complicado de leer. por eso se debe usar express
*/

/* creamos el archivo package.json
 npm init -y

 y ya se puede instalar el paquete express en este proyecto
 npm install express
 se creara node_modules etc pero no tenemos que toquetear nada
*/

 const express = require('express');

 const app = express(); //se ejecuta express y se devuelve un obj
                        //que es un servidor

app.get('/', (req,res)=>{
    res.send("hola mundo mijo");
}) //cuando se visite la app se enviara esto
app.listen(3000, ()=> {
    console.log('servidor en puerto 3000');
});