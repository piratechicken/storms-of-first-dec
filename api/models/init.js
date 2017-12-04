var mongoose = require('mongoose');

// Use the built in promise functionality built into Node.js
mongoose.Promise = global.Promise;

// Connect to our local database
mongoose.connect(
  'mongodb://localhost/storms', 
  { useMongoClient: true },  
)
.then(() => {
  console.log('Successfully connected to database')
})
.catch((error) => {
  console.log('Error connecting to mongodb', error)
})


module.exports = mongoose