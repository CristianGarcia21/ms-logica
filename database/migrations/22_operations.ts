import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import _municipalities from './6_municipalities'

export default class extends BaseSchema {
  protected tableName = 'operations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('municipality_id').unsigned().references('municipalities.id')
      table.integer('vehicle_id').unsigned().references('municipalities.id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
