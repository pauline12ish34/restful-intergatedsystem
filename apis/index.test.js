const { response } = require("express")
const request = require("supertest")

const app = require('./apps/Routes/Author.route')

describe('Authors APIS', () => {
    it('GET / --> authors', () => {
        return request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            
         })

    })
    it('GET /:id --> specific author BY ID ', () => { })
    it('GET /:id --> 404  if not found  ', () => { })

    it('POST / --> create author', () => { })
    it('DELETE /:id --> remove specific author', () => { })
})
