import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'services'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('service_id')
      table.string('description')
      table.boolean('status')
      table.string('type')
      table.dateTime('start_date')
      table.dateTime('end_date')
      //table.integer('hotel_id').unsigned().references('hotels.id')
      //table.integer('restaurant_id').unsigned().references('restaurants.id')


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
