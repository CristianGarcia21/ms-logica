import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('shifts').insert([
      { driver_id: 1, start_time: '2024-11-01 08:00:00', end_time: '2024-11-01 16:00:00', start_mileage: 5000, end_mileage: 5100 },
      { driver_id: 2, start_time: '2024-11-02 07:30:00', end_time: '2024-11-02 15:30:00', start_mileage: 3500, end_mileage: 3550 },
      { driver_id: 3, start_time: '2024-11-03 09:00:00', end_time: '2024-11-03 17:00:00', start_mileage: 2500, end_mileage: 2580 }
    ])
  }
}
