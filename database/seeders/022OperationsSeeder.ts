import Database from '@ioc:Adonis/Lucid/Database';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('operations').insert([
      { municipality_id: 1, vehicle_id: 1 },  // Camión general, Leticia (Amazonas)
      { municipality_id: 2, vehicle_id: 2 },  // Camión de alimentos perecederos, Medellín (Antioquia)
      { municipality_id: 4, vehicle_id: 3 },  // Furgón, Barranquilla (Atlántico)
      { municipality_id: 6, vehicle_id: 4 },  // Camioneta, Tunja (Boyacá)
      { municipality_id: 5, vehicle_id: 5 },  // Camión de carga pesada, Cartagena (Bolívar)
      { municipality_id: 7, vehicle_id: 6 },  // Furgoneta para electrodomésticos, Manizales (Caldas)
      { municipality_id: 10, vehicle_id: 7 }, // Camión tipo volquete, Popayán (Cauca)
      { municipality_id: 9, vehicle_id: 8 },  // Camión de carga para materiales, Yopal (Casanare)
      { municipality_id: 8, vehicle_id: 9 },  // Camioneta 4x4, Florencia (Caquetá)
      { municipality_id: 22, vehicle_id: 10 } // Camión frigorífico, Cúcuta (Norte de Santander)
    ]);
  }
}
