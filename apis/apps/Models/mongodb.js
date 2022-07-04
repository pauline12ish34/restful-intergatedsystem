const mongoose=require('mongoose')
main().then(()=>console.log("connected to the db succesfully"))
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://pauline:p12ish34@cluster0.anzcs.mongodb.net/test?retryWrites=true&w=majority');
  }

  require('./author.model');
  require('./book.model');
  require('./user.model')