import express from 'express'
import path from 'path'
import resizeImage from '../../utilities/resizeImage'
import checkFileExists from '../../utilities/checkFileExists'

const images = express.Router()

images.get(`/`, async (req: express.Request, res: express.Response) => {
    /**
     * An array of supported file extensions in Sharp
     */
    const supportedFileExtensions: string[] = [
        `jpg`,
        `jpeg`,
        `avif`,
        `webp`,
        `tiff`,
        `png`,
        `jfif`,
    ]
    /**
     * assign the name, width and height of the requested image from the Request's Query String in a variable
     */
    const imageName = req.query.image as string
    const imageWidth: number = parseInt(req.query.width as string)
    const imageHeight: number = parseInt(req.query.height as string)
    /**
     * Get the requested image's file format from the Request's Query Strings check it against
     * the `supportedFileExtensions` and give it a default value of `jpg`
     */
    const imageExtension: string =
        req.query.format &&
        supportedFileExtensions.indexOf(req.query.format as string)
            ? (req.query.format as string)
            : `jpg`
    /**
     * Create the expected file name of the resized file
     */
    const resizedFileName: string = `${imageName}-${imageWidth}-${imageHeight}.${imageExtension}`

    /**
     * Check if the imageName, width and height are valid ones before processing the request
     */
    if (
        imageName &&
        typeof imageWidth == `number` &&
        typeof imageHeight == `number`
    ) {
        /**
         * Run the function checkFileExists to validate that the image requested does exist in the main images folder
         * and if it exists check if the requested resize size already exists or not to serve it directly with no further processing
         *
         * if the image requested wasn't found respond to the request with `Request image file was not found`
         */
        if (
            (await checkFileExists(
                `public/images/${imageName}.${imageExtension}`
            )) == `Not found`
        ) {
            res.send(`Requested image file was not found`)
            return
        }
        /**
         * Check if the resized file of the image requested was found
         */
        if (
            (await checkFileExists(
                `public/images/resized/${resizedFileName}`
            )) == `Found`
        ) {
            /**
             * Send previously resized file to the user
             */
            res.sendFile(
                path.resolve(`public/images/resized/${resizedFileName}`)
            )
            return
        }

        /**
         * if the resized file of the image requested wasn't found, resize the image and save it the drive
         */
        try {
            await resizeImage(
                imageName,
                imageWidth,
                imageHeight,
                imageExtension
            )
            /**
             * Send resized file to the user
             */
            res.sendFile(
                path.resolve(`public/images/resized/${resizedFileName}`)
            )
            return
        } catch (e) {
            res.send(e)
        }
    } else {
        res.send(
            `Incorrect query paramaters please check your entries and try again`
        )
        return
    }
})

export default images
