import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('vehicle_owners').insert([
      { vehicle_id: 1,  owner_id: 1, status: 'activo' }, // Camión general - Juan Pérez - Empresa
      { vehicle_id: 2,  owner_id: 2, status: 'activo' }, // Camión de alimentos - Lucía Ortega - Independiente
      { vehicle_id: 3,  owner_id: 3, status: 'inactivo' }, // Furgón - Pedro Martínez - Empresa (inactivo)
      { vehicle_id: 4,  owner_id: 4, status: 'activo' }, // Camioneta - Juan Pérez - Independiente
      { vehicle_id: 5,  owner_id: 2, status: 'activo' }, // Camión de carga pesada - Lucía Ortega - Independiente
      { vehicle_id: 6,  owner_id: 3, status: 'inactivo' }, // Furgoneta para electrodomésticos - Pedro Martínez - Empresa
      { vehicle_id: 7,  owner_id: 4, status: 'activo' }, // Camión volquete - Juan Pérez - Independiente
      { vehicle_id: 8,  owner_id: 2, status: 'activo' }, // Camión para materiales - Lucía Ortega - Independiente
      { vehicle_id: 9,  owner_id: 3, status: 'inactivo' }, // Camioneta 4x4 - Pedro Martínez - Empresa
      { vehicle_id: 10,  owner_id: 1, status: 'activo' } // Camión frigorífico - Juan Pérez - Empresa
    ])
  }
}
