vamos a hacer una aplicacion completa con nodejs
Para ello primero hay que crear el proyecto
>>>npm init --yes  
se creara el package.json con la descripcion del proyecto

Instalamos los modulos que necesitamos:
>>> npm i express (para escribir servidor)
>>> npm i express-handlebars (para crear motores de plantilla)
>>> npm i express-session (para crear secciones dentro del servidor y asi almacenamos datos dentro de una seccion)
>>> npm i method-override (para exteneder la funcionalidad de los formularios
                                    para enviar metodos put y delete)
>>> npm i mongoose (para permitir conexion con base de datos mongodb)
>>> npm i passport passport-local (para uutentificar usuario)
>>> npm i bcryptjs (permite aplicar un algorimo a un texto y convertirlo en un hash)
>>> npm i connect-flash (para enviar mensaje entre multiples vistas)

creamos carpeta que se llame src para meter todo
dentro index.js para arrancar todo
database.js para la conexion con base de datos
creamos las carpetas
mkdir config helpers models public routes views
config : para almacenar distintos archivos (variables de entorno, como se esta autentificacion, etc...)
helpers : funciones que el servidor pueda utilizar y poder reutilizar en cualquier parte
models : como van a lucir los datos que van a almacenar en la base de datos
public : aqui estaran todos los archivos estaticos (imagenes, css, js, etc)
routes : todas las url o rutas del servidor (login,register, etc)
views : va a almacenar todos los archivos que mandamos al navegador, todos los html

Tambien se  instala el modulo nodemon para no tener que estar parando e inicializando el servidor
cuando estamos desarrollando, para ello lo instalamos como un modulo de desarrollo en vez de produccion
(como todos los anteriores)
>>> npm i nodemon -D
para usarlo cambiar en package.json
en scrips crear dev y poner "nodemon src/index.js
y entonces ya podemos poner en terminal 
>>> npm run dev

mongodb tiene que ser instalado. Lo he descargado desde 
https://www.mongodb.com/try/download/community
se descarga un .msi y se sigue los pasos de instalacion


todas las paginas deben de crearse a partir del main de layouts