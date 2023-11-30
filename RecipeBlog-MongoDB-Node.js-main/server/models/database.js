const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://goutam0524be21:goutam@cluster0.lzejvxb.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');