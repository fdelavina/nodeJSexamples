express es un framework de node para crear servidores web.
En estos ultimos años se ha popularizado js y express es una de las herramientas
que te ayuda a escribir un servidor web usando js en el backend

express te hace el servidor web y ya esta, despues habra que usar otros modulos
si quieres conectarte a base datos, subir imagenes, etc se usan otros modulos

con express puedes poner la cantidad de enrutamiento que se quiera,
ejemplo:
app.get('/', (req,res)=>{
    res.send("hola mundo mijo");
}) //cuando se visite la app se enviara esto

app.get('/about',(req,res)=>{
    res.send('about mijo3');
});

tambien existe el metodo put que hace que actualize datos en el servidor.
En el caso de put, el navegador no hace nada porque solo
hace get. Para comprobarlo usamos el programa postman que
sirve para testear las rutas

los middleaware se usan como manejadores de peticiones
 y se pueden usar
antes de enrutar las peticiones
se llaman cuando se instancia app.use(nombrefuncion)

en el codigo hemos creado un middleware que se llama logger
no obstante se pueden crear logger ya hechos, como ejemplo
hay una funcion que se llama morgan que hace lo mismo que logger
para instalarlo >>> npm i morgan
se pone en el codigo con morgan = require('morgan')

vamos a ver un middleware para pasar archivos estaticos como
puede ser un html, css, js... llamado express.static()

Se guardan los archivos a mandar en una carpeta como
puede ser public (por poner uno)
para llamarlo se pone antes del app.listen lo siguiente
app.use (express.static());
escribiendo en el navegador http://localhost:3000/ te
manda directamente el html
