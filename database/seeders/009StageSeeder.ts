import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run() {
    await Database.table('stages').insert([
      { order: 1, address_id: 1, route_id: 1, lot_id: 1 },
      { order: 2, address_id: 2, route_id: 2, lot_id: 2 },
      { order: 3, address_id: 3, route_id: 3, lot_id: 3 },
      { order: 4, address_id: 4, route_id: 4, lot_id: 4 },
      { order: 5, address_id: 5, route_id: 5, lot_id: 5 },
      { order: 6, address_id: 6, route_id: 6, lot_id: 6 },
      { order: 7, address_id: 7, route_id: 7, lot_id: 7 },
      { order: 8, address_id: 8, route_id: 8, lot_id: 8 },
      { order: 9, address_id: 9, route_id: 9, lot_id: 9 },
      { order: 10, address_id: 12, route_id: 10, lot_id: 10 },
    ])
  }
}
