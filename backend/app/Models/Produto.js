'use strict'

const Model = use('Model')

class Produto extends Model {
  tipo () {
    return this.hasMany('App/Models/TipoProduto')
  }
}

module.exports = Produto
