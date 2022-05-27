import resizeImage from '../../utilities/resizeImage'

describe(`Image resize module tests`, () => {
    //using done on those calls caused errors and as per Jasmine's recommendations I removed it
    it(`Should return new file name fjord-200-300.jpg`, async () => {
        const processImage = await resizeImage('fjord', 200, 300, 'jpg')
        expect(processImage).toContain(`fjord-200-300.jpg`)
    })
    it(`Should return new file name pexels-pixabay-235621-500-300.png`, async () => {
        const processImage = await resizeImage(
            'pexels-pixabay-235621',
            500,
            300,
            'png'
        )
        expect(processImage).toContain(`pexels-pixabay-235621-500-300.png`)
    })
    it(`Should throw an error on wrong file name or encountering an error`, async () => {
        const processImage = await resizeImage('wrongname', 500, 300, 'png')
        expect(processImage).toContain('An error has occured')
    })
})
