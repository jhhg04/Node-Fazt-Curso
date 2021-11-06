const express = require('express');
const colors = require('colors');
const app = express();

// 5 - Middlewares -> funciones que se reparten procesos
app.use(function (req, res, next) {
  console.log('Request URL: ' + req.url);
  next();
});
app.use((req, res, next) => {
  console.log('Ha pasado por esta funcion'.green);
  next();
});

// 1 - Poner a escuchar Server y enviar cb con mensaje clg
app.listen(3000, () => {
  console.log('Server On PORT 3000'.green);
});

// 2 - Crear ruta inical / para responder peticion
app.get('/', (req, res) => {
  res.end('Hello World');
});

// 3 - Crear otra ruta /login para responder peticion
app.get('/login', (req, res) => {
  res.end('Login Here');
});

// 4 - Crear otra para NotFound * para responder peticion
app.get('*', (req, res) => {
  res.end('File Not Found');
});

/*
// Server Node 
const http = require('http');

http
.createServer((req, res) => {
  res.end('Hello World');
})
.listen(3000);
*/
