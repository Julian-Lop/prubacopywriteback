const superTest = require('supertest')
const chai = require('chai')
const expect = chai.expect

const app = require('../app')
const server = superTest(app)

describe('GET prueba de controller de texto', () => {
    it("debería responder con status 200 cuando se envia un texto", async () => {
        let response = 
        await server
            .get('/iecho?text=test')
            .then(response => {
             return response
            })

        expect(response.status).to.equal(200)
    })

    it("debería devolver 'tset' cuando se envia la palabra 'test'", async () => {
        let response = 
        await server
            .get('/iecho?text=test')
            .then(response => {
             return response
            })

        expect(response.body.text).to.equal('tset')
    })

    it("debería responder con status 400 cuando no se envia un texto", async () => {
        let response = 
        await server
            .get('/iecho?text=')
            .then(response => {
             return response
            })

        expect(response.status).to.equal(400)
    })

    it("debería devolver un mensaje de error 'no text' cuando no se envia un texto", async () => {
        let response = 
        await server
            .get('/iecho?text=')
            .then(response => {
             return response
            })

        expect(response.body.error).to.equal('no text')
    })

    it("debería devolver 'true' cuando es un palindromo 'eye'", async () => {
        let response = 
        await server
            .get('/iecho?text=eye')
            .then(response => {
             return response
            })

        expect(response.body.palindrome).to.equal(true)
    })

    it("debería devolver 'false' cuando no es un palindromo 'test'", async () => {
        let response = 
        await server
            .get('/iecho?text=test')
            .then(response => {
             return response
            })

        expect(response.body.palindrome).to.equal(false)
    })
})