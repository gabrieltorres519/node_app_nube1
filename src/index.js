const express = require('express');
const app = express();
require('./database');
// app.use('/routes/index.routes.js'); // Usando el módulo de enrutamiento
app.listen(3000); //Por qué puerto correrá la app
console.log('Servidor activo en puerto',3000);
