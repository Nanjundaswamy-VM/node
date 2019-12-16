'use strict';
const {mongo_url,mongo_db} = require('./index');
const mongoose = require('mongoose')
const db_url = mongo_url + mongo_db

mongoose.connect(
    db_url+"?retryWrites=true&w=majority",
      { 
        useNewUrlParser: true,
        useUnifiedTopology:true
      }
    )
   
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    // we're connected!
    console.log("Connected to MongoDB database")
  })
   
  module.exports = db;