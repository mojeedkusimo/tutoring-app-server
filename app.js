const express = require('express');
const mongoose = require('mongoose');
const app = express();
let dbCon = require('./db-connection/db-con');
const authRoutes = require('./routes/auth');
let port = process.env.port || 8080;

dbCon();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(authRoutes);

app.listen(port);