const http = require("http");

//req = request del cliente
//res = respuesta al cliente
http.createServer( function(req, res){
    res.writeHead(200, {'Content-type' : 'text/plain'}); //codigo 200: todo ok
    res.write("Hola Mundo desde nodejs");
    res.end();
}).listen(3000); //poner en navegador http://localhost:3000/ y se sirve el contenido