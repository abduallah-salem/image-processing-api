import express from 'express'
import routes from './routes/routes'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ejs from 'ejs'
import bodyParser from 'body-parser'
import { Server } from 'http'

/**
 * Initialize the app variable
 */
const app = express()
/**
 * define port number
 */
const port: number = 3000

app.set(`view engine`, `ejs`)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

/**
 * start using routes
 */
app.use(`/`, routes)
/**
 * Create a default route to ensure that the user is able to know the correct API path
 */

//Start server
const server: Server = app.listen(port, (): void => {
    console.log(`Server is listening to call on port ${port}`)
})

export default server
