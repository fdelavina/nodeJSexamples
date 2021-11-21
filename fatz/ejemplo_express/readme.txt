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

por otro lado, estan los settings, que son las configuraciones
de express.
Para hacer eso se usa un metodo de express llamado set.
con este metodo se puede usar por ejemplo para poner el 
nombre de la applicacion
>>> app.set("appName", "mi aplicacion jave");
en este caso se a establecido una variable que no existe
llamada appName y luego, se puede usar con app.get

Tambien express tiene variables de nombres reservados, como el port
app.set('port',5000) y luego se llama con app.get

Un concepto importante en express es utilizar 
Los motores de plantilla.
nos ayudan a extender los html. por ejemplo para usar
con bbdd

vamos a instalar un motor de plantilla que se llama ejs
se instala con 
>>>npm install ejs
 y se llama en el codigo con el set
 app.set('view engine','ejs')
y se crea una carpeta que se llame views y dentro un 
archivo que se llame index.ejs y lo rellenamos con 
un html5 tipico
¿para que sirve? se quiere separar la funcionalidad
de la vista

