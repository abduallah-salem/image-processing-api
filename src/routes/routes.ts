import express from 'express'
import images from './api/images'
import upload from './api/upload'
import home from './pages/home'

const routes = express.Router()

routes.use(`/api/images`, images)
routes.use(`/api/upload`, upload)
routes.use(`/`, home)

export default routes
