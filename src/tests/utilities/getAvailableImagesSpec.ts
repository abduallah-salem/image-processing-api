import getAvailableFiles from '../../utilities/getAvailableImages'

describe(`Set of test for getting all the image file in the images directory`, () => {
    it(`Check output contains fjord.jpg`, async () => {
        const getAvailableImages = await getAvailableFiles('./public/images')
        expect(getAvailableImages).toContain(`santamonica.jpg`)
    })
})
