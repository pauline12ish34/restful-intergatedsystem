// module.exports = {
//     openapi: "3.0.3", // present supported openapi version
//     info: {
//       title: "Simple Todos API", // short title.
//       description: "A simple library API", //  desc.
//       version: "1.0.0", // version number
//       contact: {
//         name: "Pauline ishimwe", // your name
//         email: "paulineishimwe@gmail.com", // your email
//         url: "http://localhost:3000/", // your website
//       },
//     },
//   };

const options={

 swaggerDefinition = {
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
apis:['./apps/Routes/*.js']
}