const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

//Rotas
const index = require('./routes/index');
const usuarioRoute = require('./routes/usuarioRoute');

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use('/', index);
app.use('/usuario', usuarioRoute);
module.exports = app;
