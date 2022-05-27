import supertest from 'supertest'
import app from '../../../index'

const request = supertest(app)
describe(`Standard tests for the file upload end point`, () => {
    it(`Confirm that the end point response status code is 200`, async () => {
        const response = await request
            .post(`/api/upload/`)
            .set('Content-Type', 'multipart/form-data')
            .attach('selectimage', './public/santamonicatest.jpg')
            .timeout(20000)
        expect(response.status).toBe(302)
    })
})
