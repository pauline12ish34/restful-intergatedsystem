const { default: mongoose } = require("mongoose");
const { Author } = require("./author.model");

var bookSchema= new mongoose.Schema({

    name: {
        type: String,
        required: true,
      },
   
    author: {
      type: String ,
      ref: 'Author',
      required: true,
    },

    publishedAt :{
        type: Date ,
        default: Date.now,
    }
})

var book = mongoose.model('Book', bookSchema);
module.exports.Book = book