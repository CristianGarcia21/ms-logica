import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('vehicle_drivers').insert([
      { vehicle_id: 1, driver_id: 1, status: 'activo' },
      { vehicle_id: 2, driver_id: 2, status: 'activo' },
      { vehicle_id: 3, driver_id: 3, status: 'inactivo' },
      { vehicle_id: 4, driver_id: 1, status: 'activo' },
      { vehicle_id: 5, driver_id: 2, status: 'activo' },
      { vehicle_id: 6, driver_id: 3, status: 'inactivo' },
      { vehicle_id: 7, driver_id: 1, status: 'activo' },
      { vehicle_id: 8, driver_id: 2, status: 'activo' },
      { vehicle_id: 9, driver_id: 3, status: 'inactivo'},
      { vehicle_id: 10, driver_id: 1, status: 'activo' }
    ])
  }
}
