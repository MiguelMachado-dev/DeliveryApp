'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
  tipo () {
    return this.hasMany('App/Models/TipoProduto')
  }

  tamanho () {
    return this.hasMany('App/Models/Tamanho')
  }
}

module.exports = Produto
