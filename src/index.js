const express = require('express');
const app = express();
require('./database');
app.listen(3000); //Por qué puerto correrá la app
app.use('/',require('./routes/index.routes.js')); // Usando el módulo de enrutamiento
console.log('Servidor activo en puerto',3000);
