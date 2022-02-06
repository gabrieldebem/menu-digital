import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterProductTableAddEstablishmentIds extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('establishment_id')
        .unsigned()
        .references('establishments.id')
        .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
