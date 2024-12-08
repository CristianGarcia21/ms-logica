import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run() {
    await Database.table('products').insert([
      { description: 'Caja de frutas frescas', weight: 50, size: 20, type: 'perecedero', lot_id: 1, client_id: 1 },
      { description: 'Electrodoméstico pequeño', weight: 30, size: 15, type: 'no perecedero', lot_id: 2, client_id: 2 },
      { description: 'Barril de aceite vegetal', weight: 60, size: 25, type: 'líquido', lot_id: 3, client_id: 3 },
      { description: 'Caja de herramientas diversas', weight: 40, size: 18, type: 'otro', lot_id: 4, client_id: 4 },
      { description: 'Paquete de carne congelada', weight: 70, size: 30, type: 'perecedero', lot_id: 5, client_id: 5 },
      { description: 'Cajas de ropa empaquetada', weight: 80, size: 35, type: 'no perecedero', lot_id: 6, client_id: 6 },
      { description: 'Bidón de detergente líquido', weight: 20, size: 10, type: 'líquido', lot_id: 7, client_id: 1 },
      { description: 'Piezas metálicas para construcción', weight: 90, size: 40, type: 'otro', lot_id: 8, client_id: 2 },
      { description: 'Caja de lácteos variados', weight: 50, size: 22, type: 'perecedero', lot_id: 9, client_id: 3 },
      { description: 'Paquete de libros y revistas', weight: 65, size: 28, type: 'no perecedero', lot_id: 10, client_id: 4 },
    ])
  }
}

