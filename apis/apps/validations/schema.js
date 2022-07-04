const Joi = require('joi')
const newUserSchema = Joi.object({
    names: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(20).required(),
    isAdmin: Joi.boolean().required(),
})

const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(20).required()
})

module.exports.newUserSchema = newUserSchema
module.exports.userLoginSchema = userLoginSchema
    // module.exports.Book = book