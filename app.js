const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//VIDEO 93 USANDO PARTIALS EN HBS

//USANDO HANDLE BARS PARA RENDERIZAR NUESTRAS VISTAS CON EL CODIGO DE ABAJO SE EMPIEZA A USAR
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//manera de rutas con funciones es mejor con funciones de flecha 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

//SERVIR CONTENIDO ESTATICO 
app.use(express.static('public'));



//misma funcion que la de arriba pero utilizando funcion de flecha, DEBIDO A QUE EL MIDDLEWARE DE ARRIBA SE ESTA
//EJECUTANDO EL CODIGO QUE MANDA A LA RUTA DEL HOME QUEDA INUTILIZABLE
// app.get('/', (req, res) => {
//     res.send('Home page');
// })

//TAREA 2 DE VIDEO 90 
// app.get('/generic', (req, res) => {
//     res.sendFile( __dirname + '/public/generic.html');
//   });


// app.get('/elements', (req, res) => {
//     res.sendFile( __dirname + '/public/elements.html');
//   });


//el path del error de momento no funciona para la tarea 2 de video 90 de express
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html')
// });


//NUEVA RUTA PARA EL HOME VIDEO 91 DE LAS VISTAS 
app.get('/', (req , res) => {
  res.render('home', {
    nombre: 'Ricardo Fernandez',
    titulo: 'Curso de Node FH'
  });
});

//TAREA VIDEO 93 GENERANDO NUEVAS RUTAS PARA EL GENERIC Y EL ELEMNTS
//ruta del generic
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'ricardo desde Generic',
    titulo: 'Handle bar generic con hbs'
  });
});

//ruta del elements
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'ricardo desde elements',
    titulo: 'HBS elements'
  });
});
// HASTA AQUI ABARCA LA TAREA DEL VIDEO 93

app.listen(port, () => {
    console.log(`The app is listening on port ${port}`)
  });
