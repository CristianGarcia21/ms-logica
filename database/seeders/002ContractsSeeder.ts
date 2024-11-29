import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('contracts').insert([
      { start_date: '2024-01-01', end_date: '2024-12-31', amount: 10000000, estate: true, client_id: 1 },
      { start_date: '2024-02-15', end_date: '2024-08-15', amount: 5000000, estate: false, client_id: 2 },
      { start_date: '2023-10-01', end_date: '2024-09-30', amount: 15000000, estate: true, client_id: 3 },
      { start_date: '2024-03-01', end_date: '2024-12-01', amount: 8000000, estate: true, client_id: 4 },
      { start_date: '2023-12-01', end_date: '2024-06-01', amount: 7000000, estate: false, client_id: 5 },
      { start_date: '2024-05-01', end_date: '2025-04-30', amount: 20000000, estate: true, client_id: 6 },
      { start_date: '2023-07-15', end_date: '2024-01-15', amount: 3000000, estate: false, client_id: 1 },
      { start_date: '2024-06-01', end_date: '2024-11-30', amount: 4000000, estate: true, client_id: 2 },
      { start_date: '2023-09-01', end_date: '2024-08-31', amount: 12000000, estate: true, client_id: 3 },
      { start_date: '2024-01-01', end_date: '2024-06-30', amount: 6000000, estate: false, client_id: 4 },
    ])
  }
}
