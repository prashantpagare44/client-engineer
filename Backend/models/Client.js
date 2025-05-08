// models/Client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  profilePicture: String,
  password: String // hashed
});

module.exports = mongoose.model('Client', clientSchema);
