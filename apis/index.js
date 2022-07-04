const  swaggerUi= require('swagger-ui-express')
const express= require('express');
const mongoose=require('mongoose');

require("./apps/Models/mongodb")
// const swaggerDocument= require("./docs/basicInfo")
let cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
// app.use(cors({
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

// const options={swaggerDocument,apis:['./apps/Routes/*.js'] }
var app=express();


const option={

    swaggerDefinition : {
       openapi: '3.0.1',
       info: {
           version: '1.0.0',
           title: 'APIs Document',
           description: 'your description here',
           termsOfService: '',
           contact: {
               name: 'Tran Son hoang',
               email: 'son.hoang01@gmail.com',
               url: 'https://hoangtran.co'
           },
           license: {
               name: 'Apache 2.0',
               url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
           }
       },
       servers: [
           {
               url: 'http://localhost:7000/api/v1',
               description: 'Local server'
           },
   
       ],
   },
   apis:['./apps/Routes/Author.route.js']
   };
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.get('/',(req,res)=>{ 
    console.log("Welcome to Our APP");
    res.send("Welcome to our app")
});

app.use("/api/v1", require("./apps/Routes/Author.route"));
app.use("/api/v1", require("./apps/Routes/Book.route"));
app.use("/api/v1",require("./apps/Routes/User.route"))
const specs=swaggerJSDoc(option);

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(specs));

const port=process.env.PORT || 7000;
app.listen(port,
    console.log(`listening on port succesfully ${port}`)
);