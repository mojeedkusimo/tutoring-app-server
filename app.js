const express = require('express');
const mongoose = require('mongoose');
const app = express();
let dbCon = require('./db-connection/db-con');

dbCon();