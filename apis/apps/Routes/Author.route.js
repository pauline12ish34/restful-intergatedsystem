const express = require("express");
const AuthorController = require("../Controllers/Authors");
const authentication = require('../middleware/auth');

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       required:
 *         - title
 *         - author_name
 *       properties:
 *         title:
 *           type: string
 *           description: The meter number
 *         author_name:
 *            type: string
 *            description: money paid
 *       example:
 *         title: string
 *         author_name: string
 *         
 */

/**
 * @swagger
 * tags:
 *  name: Authors
 *  description: the Author management API
 */


//get all

/**
 * @swagger
 * /authors:
 *  get:
 *    summary: get all authors
 *    tags: [Authors]
 *    responses:
 *      200:
 *        description: for all authors
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *              $ref: '#/components/schemas/Author'
 */
router.get("/authors", authentication, AuthorController.getAll);


//new author
router.post("/authors", authentication, AuthorController.newAuthor);

//get by id
router.get("/authors/byid/:id", authentication, AuthorController.getById);

//put
router.put("/authors/:id", authentication, AuthorController.update)

//delete
router.delete("/authors/:id", authentication, AuthorController.removeAuthor);

module.exports = router;