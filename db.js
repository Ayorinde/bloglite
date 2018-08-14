const mongoose = require('mongoose');
const uri = 'mongodb://localhost/test1';
//const options = { useNewUrlParser: true }
mongoose.connect(uri /*, options*/).then(
    () => { console.log('mongo connected successfully') },
    err => { console.log('error connecting to mongo',err)}
  );