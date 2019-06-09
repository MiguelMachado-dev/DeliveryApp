'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TamanhoSchema extends Schema {
  up () {
    this.create('tamanhos', table => {
      table.increments()
      table.string('description', 80).notNullable()
      table.integer('value').notNullable()
      table
        .integer('produto_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('produtos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('tamanhos')
  }
}

module.exports = TamanhoSchema
