const express= require('express')
const BookController= require ('../Controllers/books')
const router= express.Router();

router.post("/", BookController.newBook);

//get all
router.get("/books", BookController.getAll);

//get by id
router.get("/byid/:id", BookController.getById);

//delete
router.delete("/:id", BookController.removeBook);

module.exports = router;
