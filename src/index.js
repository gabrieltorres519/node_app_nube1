const express = require('express');
const app = express();
require('./database');
//Por qué puerto escuchar a un puerto
app.listen(3000);
console.log('Servidor activo en puerto',3000);
