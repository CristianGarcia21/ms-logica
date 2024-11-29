import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('payments').insert([
      { amount: 50000, start_date: '2024-11-01', end_date: '2024-11-30', status: true, contract_id: 1, receipt_id: 1 },
      { amount: 75000, start_date: '2024-11-05', end_date: '2024-11-30', status: false, contract_id: 2, receipt_id: 2 },
      { amount: 100000, start_date: '2024-11-10', end_date: '2024-11-30', status: true, contract_id: 3, receipt_id: 9 },
      { amount: 120000, start_date: '2024-11-12', end_date: '2024-11-30', status: true, contract_id: 4, receipt_id: 4 },
      { amount: 90000, start_date: '2024-11-15', end_date: '2024-11-30', status: false, contract_id: 5, receipt_id: 7 },
      { amount: 80000, start_date: '2024-11-18', end_date: '2024-11-30', status: true, contract_id: 6, receipt_id: 6 },
      { amount: 110000, start_date: '2024-11-20', end_date: '2024-11-30', status: true, contract_id: 7, receipt_id: 5 },
      { amount: 95000, start_date: '2024-11-22', end_date: '2024-11-30', status: false, contract_id: 8, receipt_id: 8 },
      { amount: 85000, start_date: '2024-11-25', end_date: '2024-11-30', status: true, contract_id: 9, receipt_id: 3 },
      { amount: 70000, start_date: '2024-11-28', end_date: '2024-11-30', status: false, contract_id: 10, receipt_id: 10 }
    ])
  }
}
