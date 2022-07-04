const express = require('express')
const {Book}=require('../Models/book.model')
const {Author}= require('../Models/author.model')
const _ = require('lodash');

const bookController={
    async newBook(req,res){
let book= await Book.findOne({name:req.body.name}) 
if (book)return res.send("the book arleady exists")

let auth= await Author.findOne({author_name:req.body.author})

if (!auth) return res.send("this author doesn't exist")
let newbie= new Book ({name:req.body.name, author:auth.author_name})

// let newbie= new Book({..._.pick(req.body['name']),author:auth._id});
newbie.save()
return  res.send(_.pick(newbie,['_id','name','author']));


    },
// async updateBook(req,res){
//   const auth= await Author.findOne({author_name:req.body.author})
//       if (!auth) return res.send("this author doesn't exist")
// await Book.findByIdAndUpdate(req.params.id, {
//   $set :{
//     name:req.body.name,
//     author:auth._id
//   }
// })
// let updBook= await Book.findById(req.params.id)
// return res.send (updBook);

// }
//     ,


    async getAll(req, res) {
        const books = await Book.find()
        return res.send(books)
       
      },
      async getById(req, res) {
        Book.findById(req.params.id)
          .then((book) => res.send({ book }))
          .catch((err) => res.status(400).send({ success: false, message: err }));
      },
       async removeBook(req, res) {
         Book.findByIdAndRemove(req.params.id)
         .then(() => res.send({ success: true, message: "Removed" }))
         .catch((err) => res.status(400).send({ success: false, message: err }));
        //  .then(() => res.send({ success: true, message: "book Removed" }))
        //   .catch(res.status(400).send({ success: false, message: err }));
    },
}

module.exports=bookController