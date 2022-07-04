const express = require('express');
const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, 'PAULINE_JWT_KEY');
        console.log("dec", decodedToken)
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            return res.status(401).send({
                    message: "invalid token"
                })
                // throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};


// module.exports=(req,res,next)=>{
//   try {
//     const  token = req.headers.authorization.split(' ')[1];
// //         const token = req.headers.authorization.split(' ')[1];
//         const decodedToken= jwt.verify(token,'RANDOM_TOKEN_SECRET');
//         const userId= decodedToken.userId;
//         // let token=verify(req.headers.authorization.split("")[1],process.env.JWT_SECRET)

//         if (req.body.userId&& req.body.userId !== userId) {
//             throw 'invalid user ID';
//         } else {
//            next(); 
//         }

//   } catch (error) {

//   }
// }



// function isLoggedIn(req,res,next) {

//     User.findOne({email:req.body})
//     .then(

//         exports.login = (req, res, next) => {
//             User.findOne({ email: req.body.email }).then(
//               (user) => {
//                 if (!user) {
//                   return res.status(401).json({
//                     error: new Error('User not found!')
//                   });
//                 }
//                 bcrypt.compare(req.body.password, user.password).then(
//                   (valid) => {
//                     if (!valid) {
//                       return res.status(401).json({
//                         error: new Error('Incorrect password!')
//                       });
//                     }
// const token= jwt.sign({userId:user._id},'RANDOM_TOKEN_SECRET',
// {expiresIn:'24h'}
// )

//                     res.status(200).json({
//                       userId: user._id,
//                       token: token
//                     });
//                   }
//                 ).catch(
//                   (error) => {
//                     res.status(500).json({
//                       error: error
//                     });
//                   }
//                 );
//               }
//             ).catch(
//               (error) => {
//                 res.status(500).json({
//                   error: error
//                 });
//               }
//             );
//           }
//     );

//     if(!req.headers.authorization || req.headers.authorization.split(" ")[0] !=="Bearer"){
// return res.send({
//     status:401,
//     message:"you are unauthorized"
// })

//     }

//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         const decodedToken= jwt.verify(token,'RANDOM_TOKEN_SECRET');
//         const userId= decodedToken.userId;
//         // let token=verify(req.headers.authorization.split("")[1],process.env.JWT_SECRET)

//         if (req.body.userId&& req.body.userId !== userId) {
//             throw 'invalid user ID';
//         } else {
//            next(); 
//         }

//     } catch (error) {

//         res.status(401).json({
//             error: new Error('invalid request')
//         })
//     }
// }