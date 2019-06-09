'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoProduto extends Model {
  produto () {
    return this.hasMany('App/Models/Produto')
  }

  tamanho () {
    return this.belongsTo('App/Models/Produto')
  }
}

module.exports = TipoProduto
