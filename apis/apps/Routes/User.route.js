const express= require('express')
const userController= require('../Controllers/Users')
const router= express.Router();

router.post("/users/new/",userController.newUser);
router.post("/users/login/",userController.userLogin);
// router.post("/users/login",userController.userLogin);
router.get("/users/all",userController.getAll);
router.delete("/:id", userController.removeUser);
module.exports = router;