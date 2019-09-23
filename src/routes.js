import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import ProviderController from './app/controllers/ProviderController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.create)
routes.post('/session', SessionController.create)

routes.get('/providers', ProviderController.get)

routes.use(authMiddleware)

routes.put('/users', UserController.update)

routes.post('/files', upload.single('file'), FileController.create)

export default routes
