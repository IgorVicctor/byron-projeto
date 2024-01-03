import express from "express";
import * as postagemController from '../Controllers/postagem.controllers.js'

const router = express.Router()

router.get('/', postagemController.getPostagem)

router.get('/:postagemId', postagemController.getPostagemById)

router.post('/', postagemController.criarPostagem)

router.put('/:postagemId', postagemController.atualizarPostagem)

router.delete('/:postagemId', postagemController.deletarPostagem)


export default router