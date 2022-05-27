import express from 'express'
import multer from 'multer'
/**
 * An array of supported file extensions in Sharp
 */
const supportedFileExtensions: string[] = [
    `image/jpg`,
    `image/jpeg`,
    `image/avif`,
    `image/webp`,
    `image/tiff`,
    `image/png`,
    `image/jfif`,
]
/**
 * Create multer disStorage to specify the directory to upload the file to and what the file name will be
 */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

/**
 * Define the uploader multer function's parameters Storage and fileFilter to prevent any unwanted files from being uploaded
 */
const uploader = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (!supportedFileExtensions.includes(file.mimetype)) {
            cb(null, false)
        } else {
            cb(null, true)
        }
    },
})

const upload = express.Router()

/**
 * Define the upload post route to receive form submissions from home to process and upload submitted files
 * */
upload.post(
    `/`,
    uploader.single('selectimage'),
    async (req: express.Request, res: express.Response) => {
        /** asd
         * Check if the file format is supported or not, the redirect the user to the home page to show a notification with success or failure
         */
        if (!supportedFileExtensions.includes(req.file?.mimetype as string)) {
            res.redirect(
                `/?message=Incorrect image format you can only upload jpg, jpeg, avif, webp, tiff, jfif or png images`
            )
        } else {
            res.redirect(
                `/?message=File%20${req.file?.originalname}%20uploaded%20successfully`
            )
        }
    }
)

export default upload
