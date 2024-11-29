import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('receipts').insert([
      { customer_id: 1, total_amount: 150000, status: true },
      { customer_id: 2, total_amount: 200000, status: true },
      { customer_id: 3, total_amount: 120000, status: false },
      { customer_id: 4, total_amount: 300000, status: true },
      { customer_id: 5, total_amount: 180000, status: false },
      { customer_id: 6, total_amount: 250000, status: true },
      { customer_id: 7, total_amount: 220000, status: true },
      { customer_id: 8, total_amount: 160000, status: false },
      { customer_id: 9, total_amount: 280000, status: true },
      { customer_id: 10, total_amount: 350000, status: false }
    ])
  }
}
