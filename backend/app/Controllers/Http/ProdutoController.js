'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController {
  async index () {
    const produtos = await Produto.all()

    return produtos
  }

  async store ({ request }) {
    const data = request.only(['tipo'])

    const produto = await Produto.create(data)

    return produto
  }

  async show ({ params, request, response, view }) {}

  async edit ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = ProdutoController
