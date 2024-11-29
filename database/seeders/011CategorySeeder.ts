import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {

    await Database.table('categories').insert([
      { name: 'Electrodomésticos', parent_id: null },
      { name: 'Alimentos', parent_id: null },
      { name: 'Carga', parent_id: null },
      { name: 'Ropa', parent_id: null }
    ])

    // Insertar subcategorías con referencia a la categoría principal (parent_id)
    await Database.table('categories').insert([
      // Subcategoría de Electrodomésticos
      { name: 'Lentes y Monitores', parent_id: 1 },
      { name: 'Cocina', parent_id: 1 },
      { name: 'Televisores', parent_id: 1 },
      // Subcategoría de Alimentos
      { name: 'Alimentos Perecederos', parent_id: 2 },
      { name: 'Bebidas', parent_id: 2 },
      { name: 'Comidas No Perecederas', parent_id: 2 },
      // Subcategoría de Carga
      { name: 'Carga Pesada', parent_id: 3 },
      { name: 'Carga Liviana', parent_id: 3 },
      // Subcategoría de Ropa
      { name: 'Hombres', parent_id: 4 },
      { name: 'Mujeres', parent_id: 4 }
    ])
  }
}
