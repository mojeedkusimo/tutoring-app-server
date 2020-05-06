const mongoose = require('mongoose');
const express = require('express');
const app = express();
const url = "mongodb+srv://mojeed:mojeed@mojeedkusimo-z1mtq.mongodb.net/test?retryWrites=true&w=majority";
let port = process.env.port || 8080;

let dbCon = function () {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
        console.log('Database connected using port:' + port);
    });

}

module.exports = dbCon;