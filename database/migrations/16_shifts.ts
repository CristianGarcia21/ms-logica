import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'shifts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('driver_id').unsigned().references('drivers.id')
      table.integer('vehicle_id').unsigned().references('vehicles.id')
      table.integer('start_mileage')
      table.integer('end_mileage')
      table.integer('start_time')
      table.integer('end_time')

      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}