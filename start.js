require('./models/Registration');
require('dotenv').config();
const app = require('./app'); // Make sure app.js exists and exports your Express app
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Mongoose connection successfully');
}).catch((err) => {
  console.log(`Connection error: ${err.message}`);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
