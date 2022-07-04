const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    names: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024,
        minlength: 3
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  });

  var user = mongoose.model('User', userSchema);
  module.exports.User = user