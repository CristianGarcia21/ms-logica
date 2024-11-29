import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('vehicles').insert([
      // Camión general
      { plate: 'CAM123', brand: 'Volvo', type_vehicle: 'Camión', load_capacity: 15000 },

      // Camión de alimentos perecederos
      { plate: 'ALM456', brand: 'Scania', type_vehicle: 'Camión Alimentos', load_capacity: 10000 },

      // Furgón
      { plate: 'FUR789', brand: 'Ford', type_vehicle: 'Furgón', load_capacity: 5000 },

      // Camioneta
      { plate: 'CAM101', brand: 'Toyota', type_vehicle: 'Camioneta', load_capacity: 3000 },

      // Camión de carga pesada
      { plate: 'CARG112', brand: 'Mercedes-Benz', type_vehicle: 'Camión Carga', load_capacity: 20000 },

      // Furgoneta para electrodomésticos
      { plate: 'FUR202', brand: 'Renault', type_vehicle: 'Furgoneta Electrodomésticos', load_capacity: 4000 },

      // Camión tipo volquete
      { plate: 'VOL123', brand: 'MAN', type_vehicle: 'Camión Volquete', load_capacity: 18000 },

      // Camión de carga para materiales
      { plate: 'MAT456', brand: 'Hino', type_vehicle: 'Camión Carga Materiales', load_capacity: 12000 },

      // Camioneta 4x4
      { plate: 'CAM789', brand: 'Mitsubishi', type_vehicle: 'Camioneta 4x4', load_capacity: 3500 },

      // Camión frigorífico
      { plate: 'FRI101', brand: 'Kenworth', type_vehicle: 'Camión Frigorífico', load_capacity: 9000 },
    ])
  }
}
