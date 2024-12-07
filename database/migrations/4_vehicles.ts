import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('plate')
      table.string('brand')
      table.string('type_vehicle')
      table.integer('load_capacity')
      table.decimal('latitude', 10, 7).nullable() // Agregar latitud
      table.decimal('longitude', 10, 7).nullable() // Agregar longitud
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
