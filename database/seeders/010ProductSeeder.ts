import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('products').insert([

      { description: 'Producto A', weight: 50, size: 20, type: 'Electrodoméstico', lot_id: 1, client_id: 1 },
      { description: 'Producto B', weight: 30, size: 15, type: 'Carga', lot_id: 2, client_id: 2 },
      { description: 'Producto C', weight: 60, size: 25, type: 'Alimentos Perecederos', lot_id: 3, client_id: 3 },
      { description: 'Producto D', weight: 40, size: 18, type: 'Electrodoméstico', lot_id: 4, client_id: 4 },
      { description: 'Producto E', weight: 70, size: 30, type: 'Carga', lot_id: 5, client_id: 5 },
      { description: 'Producto F', weight: 80, size: 35, type: 'Alimentos Perecederos', lot_id: 6, client_id: 6 },
      { description: 'Producto G', weight: 20, size: 10, type: 'Electrodoméstico', lot_id: 7, client_id: 1 },
      { description: 'Producto H', weight: 90, size: 40, type: 'Carga', lot_id: 8, client_id: 2 },
      { description: 'Producto I', weight: 50, size: 22, type: 'Alimentos Perecederos', lot_id: 9, client_id: 3 },
      { description: 'Producto J', weight: 65, size: 28, type: 'Electrodoméstico', lot_id: 10, client_id: 4 }
    ])
  }
}
