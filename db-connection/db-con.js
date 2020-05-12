// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
const mongodb = require('mongodb');
const url = "mongodb+srv://mojeed:mojeed@mojeedkusimo-z1mtq.mongodb.net/test?retryWrites=true&w=majority";
let port = process.env.port || 8080;

// let dbCon = function () {
//     mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
//         console.log('Database connected using port:' + port);
//     });

// }

// module.exports = dbCon;

const MongoClient = mongodb.MongoClient;
exports.registerUser = (name, email, password, category) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        console.log('Creating new user '+ name +'...');
        if (err) throw err;
        let myDB = db.db('test');
        let user = {name : name, email: email, password: password, category: category}
        myDB.collection('users').insertOne(user, function(err, res) {
            if (err) throw err;
            return res.result.n;
        });
  });
}
   let response = 0;
exports.queryUser = (email) => {
    // response = 0;
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        console.log('Quering database for '+ email + '...');
        if (err) throw err;
        let myDB = db.db('test');
        let query = {email: email}

        myDB.collection('users').find(query).toArray(function (err,res) {
            if (err) throw err;
            console.log('This is true query result for the number of ' + email +' is: ' + res.length);
            response += res.length;


        });
  });
  return 'This is from query main function: ' + response;
}

