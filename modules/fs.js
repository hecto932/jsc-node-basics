const fs = require('fs');

function readFile(ruta, callback) {
  fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
  });
}

function writeFile(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.log('No se ha podido escribir archivo');
    } else {
      console.log('Se escribio archivo correctamente');
    }
  });
}

function removeFile(ruta, callback) {
  fs.unlink(ruta, callback);
}

writeFile(
  __dirname + '/archivo.txt',
  'estoy escribiendo en un archivo :D',
  console.log
);
readFile(__dirname + '/archivo.txt', console.log);
removeFile(__dirname + '/archivo.txt', console.log);
