import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Establishments extends BaseSchema {
  protected tableName = 'establishments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
      table.string('name')
      table.string('document')
      table.string('slogan')
      table.string('primary_color').nullable()
      table.string('secondary_color').nullable()
      table.string('tertiary_color').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
