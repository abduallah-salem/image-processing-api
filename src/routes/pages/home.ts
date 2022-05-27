import express from 'express'
import getAvailableFiles from '../../utilities/getAvailableImages'

const home = express.Router()

/** as
 * Home route to display the main home page
 */
home.get(
    `/`,
    async (req: express.Request, res: express.Response): Promise<void> => {
        /**
         * Get ann array of the available file in the images folder
         * Then render the home page and pass the file names via ejs template
         */
        const images: string[] = await getAvailableFiles(`./public/images/`)

        res.render('home', { images: images })
    }
)

export default home
