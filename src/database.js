//Aquí va la cadena de conexión de Mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/mibase')
    .then(db => console.log("Base de datos conectada", db.connection.host))
    .catch(err=>console.err(err))
