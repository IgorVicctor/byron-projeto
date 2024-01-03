import express from 'express';
import * as helloController from '../Controllers/hello.controllers.js'

const router = express.Router();

router.get('/hello', helloController.hello)

export default router