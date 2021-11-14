const fs = require("fs")

fs.writeFile("./texto.txt", "linea uno", function (err){
    if (err)
    {
        console.log(err);
    }
    console.log("Archivo creado sin errores")
})

console.log("Siguiente linea del codigo. Esta deberia salir primra \
                porque es asincrono el codigo");


//leemos el archivo creado

fs.readFile("./texto.txt",function (err,data) {
    if (err)
    {
        console.log("no se ha podido leer el error");
    }
    console.log(data.toString());
})