'use strict'

const TipoProduto = use('App/Models/TipoProduto')

class TipoProdutoController {
  async index () {
    const tipo = await TipoProduto.query()
      .with('produto')
      .fetch()

    return tipo
  }

  async store ({ request }) {
    const data = request.only(['descricao', 'produto_id'])

    const tipo = await TipoProduto.create(data)

    return tipo
  }

  async show ({ params, request, response, view }) {}

  async edit ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = TipoProdutoController
