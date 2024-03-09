const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  channelName: {
    type: String,
    required: true
  },
  contentType: {
    type: [String],
    default: []
  }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
