const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { User } = require('../Models/user.model')
const { newUserSchema, userLoginSchema } = require('../validations/schema')

const _ = require('lodash')
const hashPassword = require('../utils/hash')


var router = express.Router()

const userController = {
    async getAll(req, res) {
        const users = await User.find()
        return res.send(users)
    },
    async newUser(req, res) {
        const validations = newUserSchema.validate(req.body);
        if (validations.error) return res.send({
            status: 400,
            message: validations.error.details[0].message

        })
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            console.log(user);
            return res.send("user arleady registered")
        }

        let new_user = new User(_.pick(req.body, ['names', 'email', 'password', 'isAdmin']))

        const hashed = await hashPassword(new_user.password)
        new_user.password = hashed
        await new_user.save();
        return res.send(_.pick(new_user, ['_id', 'names', 'email', 'password', 'isAdmin'])).status(201);

    },

    async removeUser(req, res) {
        User.findByIdAndRemove(req.params.id)
            .then(() => res.send({ success: true, message: "Removed" }))
            .catch(res.status(400).send({ success: false, message: err }));

    },

    async userLogin(req, res) {
        const validations = userLoginSchema.validate(req.body);

        if (validations.error) return res.send({
            status: 400,
            message: validations.error.details[0].message

        })
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            console.log(user);
            return res.send("user doesn't exist")
        }

        let valid = bcrypt.compare(req.body.password, user.password)
        if (!valid) {
            return res.status(401).send({
                status: 401,
                message: "Incorrect password!"
            });
        }


        let token = jwt.sign({
                email: user.email,
                userId: user._id
            },
            'PAULINE_JWT_KEY', {
                expiresIn: "1w"
            }
        );

        return res.status(200).json({
            userId: user._id,
            token: token,
            message: "the user is logged in"
        });



    }
}

module.exports = userController;