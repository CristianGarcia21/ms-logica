import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('lots').insert([
      { quantity: 100, total_weight: 2000, type: 'Electrodomésticos', size: 5, route_id: 1 },
      { quantity: 150, total_weight: 3000, type: 'Alimentos Perecederos', size: 10, route_id: 2 },
      { quantity: 200, total_weight: 4000, type: 'Cargas Generales', size: 15, route_id: 3 },
      { quantity: 80, total_weight: 1600, type: 'Electrodomésticos', size: 4, route_id: 4 },
      { quantity: 120, total_weight: 2400, type: 'Alimentos Perecederos', size: 6, route_id: 5 },
      { quantity: 180, total_weight: 3600, type: 'Cargas Generales', size: 12, route_id: 6 },
      { quantity: 130, total_weight: 2600, type: 'Electrodomésticos', size: 8, route_id: 7 },
      { quantity: 160, total_weight: 3200, type: 'Alimentos Perecederos', size: 9, route_id: 8 },
      { quantity: 110, total_weight: 2200, type: 'Cargas Generales', size: 7, route_id: 9 },
      { quantity: 90, total_weight: 1800, type: 'Electrodomésticos', size: 5, route_id: 10 }
    ])
  }
}
