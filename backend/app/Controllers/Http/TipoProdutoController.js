'use strict'

const TipoProduto = use('App/Models/TipoProduto')

class TipoProdutoController {
  async index ({ request, response, view }) {
    const tipo = await TipoProduto.query()
      .with('produto')
      .fetch()

    return tipo
  }

  async store ({ request, response }) {
    const data = request.only(['descricao', 'produtos_id'])

    const tipo = await TipoProduto.create(data)

    return tipo
  }

  /**
   * Display a single tipoproduto.
   * GET tipoprodutos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {}

  /**
   * Render a form to update an existing tipoproduto.
   * GET tipoprodutos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {}

  /**
   * Update tipoproduto details.
   * PUT or PATCH tipoprodutos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {}

  /**
   * Delete a tipoproduto with id.
   * DELETE tipoprodutos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = TipoProdutoController
