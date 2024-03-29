import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import ProviderController from './app/controllers/ProviderController'
import AppointmentController from './app/controllers/AppointmentController'
import ScheduleController from './app/controllers/ScheduleController'
import NotificationController from './app/controllers/NotificationController'
import AvailableController from './app/controllers/AvailableController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.create)
routes.post('/session', SessionController.create)

routes.use(authMiddleware)

routes.put('/users', UserController.update)

routes.get('/providers', ProviderController.get)
routes.get('/providers/:providerId/available', AvailableController.get)

routes.get('/appointments', AppointmentController.get)
routes.post('/appointments', AppointmentController.create)
routes.delete('/appointments/:id', AppointmentController.delete)

routes.get('/schedule', ScheduleController.get)

routes.get('/notifications', NotificationController.get)
routes.put('/notifications/:id', NotificationController.update)

routes.post('/files', upload.single('file'), FileController.create)

export default routes
