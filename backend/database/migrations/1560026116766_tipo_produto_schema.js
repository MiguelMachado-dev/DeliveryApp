'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoProdutoSchema extends Schema {
  up () {
    this.create('tipo_produtos', table => {
      table.increments()
      table
        .integer('produto_id')
        .references('id')
        .inTable('produtos')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .unsigned()
        .notNullable()
      table.string('descricao', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_produtos')
  }
}

module.exports = TipoProdutoSchema
