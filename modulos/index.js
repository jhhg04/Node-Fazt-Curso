const os = require('os');
const fs = require('fs');
const http = require('http');
const colors = require('colors');
const express = require('express');

const server = express();

server.listen(3000, () => {
  console.log('Server on port 3000'.green);
});

server.get('/', (req, res) => {
  res.send('<h1>Hello World from Express and Node</h1>');
  res.end();
});

/*
// Server Node
const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hello World</h1>');
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.green);
});
*/

/* 
// Leer archivo que se creo
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
*/

/* 
// Crear archivo
fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo Creado');
});
console.log('ultima linea de codigo');
*/

/* 
// Use metodos del sistema
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(`Free mem: ${os.freemem()} bytes`);
console.log('Free mem:', os.freemem(), ' bytes');
*/
