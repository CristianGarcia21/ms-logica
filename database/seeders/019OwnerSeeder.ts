import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('owners').insert([
      { type: 'Empresa', status: true, user_id: 1, driver_id: 1 },
      { type: 'Independiente', status: true, user_id: 2, driver_id: 2 },
      { type: 'Empresa', status: false, user_id: 3, driver_id: 3 },
      { type: 'Independiente', status: true, user_id: 4, driver_id: 1 },
      { type: 'Empresa', status: false, user_id: 5, driver_id: 2 }
    ])
  }
}