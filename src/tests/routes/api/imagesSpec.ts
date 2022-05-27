import supertest from 'supertest'
import app from '../../../index'

const request = supertest(app)
describe(`Test the images resize end point`, () => {
    it(`Confirm that the end point response status code is 200`, async () => {
        const response = await request.get(
            `/api/images/?image=pexels-jaime-reimer-2662116&width=400&height=400&format=png`
        )
        expect(response.status).toBe(200)
    })
    it(`Confirm that the end point response when there are no parameters returns the correct text`, async () => {
        const response = await request.get(`/api/images/`)
        expect(response.text).toBe(
            `Incorrect query paramaters please check your entries and try again`
        )
    })
    it(`Confirm that the end point response returns the correct content type`, async () => {
        const response = await request.get(
            `/api/images/?image=pexels-jaime-reimer-2662116&width=400&height=400&format=png`
        )
        expect(response[`header`][`content-type`]).toBe(`image/png`)
    })
    it(`Confirm that the end point response returns the correct error message when the image is not found`, async () => {
        const response = await request.get(
            `/api/images/?image=what-image&width=400&height=400&format=png`
        )
        expect(response.text).toBe(`Requested image file was not found`)
    })
})
