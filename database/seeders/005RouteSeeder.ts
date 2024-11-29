import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('routes').insert([
      { contract_id: 1, vehicle_id: 1 },
      { contract_id: 2, vehicle_id: 2 },
      { contract_id: 3, vehicle_id: 3 },
      { contract_id: 4, vehicle_id: 4 },
      { contract_id: 5, vehicle_id: 5 },
      { contract_id: 6, vehicle_id: 6 },
      { contract_id: 7, vehicle_id: 7 },
      { contract_id: 8, vehicle_id: 8 },
      { contract_id: 9, vehicle_id: 9 },
      { contract_id: 10, vehicle_id: 10 },
    ])
  }
}
