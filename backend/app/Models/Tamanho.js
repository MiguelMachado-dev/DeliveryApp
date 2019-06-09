'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tamanho extends Model {
  produto () {
    return this.belongsTo('App/Models/Produto')
  }
}

module.exports = Tamanho
