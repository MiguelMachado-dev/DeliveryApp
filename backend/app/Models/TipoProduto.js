'use strict'

const Model = use('Model')

class TipoProduto extends Model {
  produto () {
    return this.belongsTo('App/Models/Produto')
  }
}

module.exports = TipoProduto
