import supertest from 'supertest'
import app from '../../../index'

const request = supertest(app)
describe(`Test the home page end point`, () => {
    it(`Confirm that the end point response status code is 200`, async () => {
        const response = await request.get(`/`)
        expect(response.status).toBe(200)
    })
})
