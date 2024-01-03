import { PrismaClient } from "@prisma/client"

// CRUD (create, read, update, delete)

// query (procura, busca)

const prisma = new PrismaClient()

export const getCategorias = async (req, res) => {
    const categorias = await prisma.categoria.findMany()

    res.json({
        data: categorias,
        msg: "Categorias encontradas com sucesso!"
    })
}

export const criarCategorias = async (req, res) => {
    const categoria = await prisma.categoria.create({
        data: {
            nome: req.body.nome
        }
    })

    res.json({
        data: categoria,
        msg: "Categorias criada com sucesso!"
    })
}

export const deletarCategorias = async (req, res) => {
    const categoria = await prisma.categoria.delete({
        where: {
            id: parseInt(req.params.categoriaId)
        }
    })

    res.json({
        // data: categoria,
        msg: 'Cateogoria deletada com sucesso!'
    })
}