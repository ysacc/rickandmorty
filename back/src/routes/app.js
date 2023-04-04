const express = require('express');
const router = require('./index');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// creacion de server
const app = express();

//parser
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//route
app.use('/rickandmorty', router);

//database



module.exports = app;