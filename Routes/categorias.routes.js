import express from "express";
import * as categoriaController from '../Controllers/categoria.controllers.js'

const router = express.Router()

router.get('/', categoriaController.getCategorias)

router.post('/', categoriaController.criarCategorias)

router.delete('/:categoriaId', categoriaController.deletarCategorias)

export default router

