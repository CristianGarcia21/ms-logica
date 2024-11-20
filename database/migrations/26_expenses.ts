import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'expenses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('amount')
      table.string('description')
      table.date('date') 
      table.integer('owner_id').unsigned().references('owners.id')
      table.integer('service_id').unsigned().references('services.id')
      table.integer('driver_id').unsigned().references('drivers.id')
      table.integer('receipt_id').unsigned().references('receipts.id')
      
      
      

      
      
      

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
