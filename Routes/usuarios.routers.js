import express from "express";
import * as usuarioController from '../Controllers/usuario.controllers.js'
import autorizarUsuario from "../Middlewares/auth.middlewares.js";
import autorizarAdmin from "../Middlewares/admin.middlewares.js";

const router  = express.Router()

router.get('/', autorizarAdmin, usuarioController.getUsuario)

router.post('/login', usuarioController.login)

router.get('/:usuarioId', usuarioController.getUsuarioPorId)

router.post('/', usuarioController.criarUsuario)

router.put('/:usuarioId', usuarioController.atualizarUsuario)

router.delete('/:usuarioId', usuarioController.deletarUsuario)

export default router
