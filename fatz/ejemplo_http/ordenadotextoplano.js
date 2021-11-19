const http = require("http");

//req = request del cliente
//res = respuesta al cliente
const handleServer =  function(req, res)
{
    res.writeHead(200, {'Content-type' : 'text/plain'}); //codigo 200: todo ok
    res.write("Hola Mundo desde nodejs");
    res.end();
}
//poner en navegador http://localhost:3000/ y se sirve el contenido
const server = http.createServer(handleServer); 

server.listen(3000, function (){
    console.log("sirviendo en puerto 3000")
});