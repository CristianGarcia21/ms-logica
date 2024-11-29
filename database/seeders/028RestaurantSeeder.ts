import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('restaurants').insert([
      { name: 'Restaurante El Buen Sabor', address: 'Carrera 8 #50-60, Bogotá', phone: '3207654321', service_id: 1},
      { name: 'Restaurante Delicias del Mar', address: 'Avenida 25 #10-15, Cartagena', phone: '3212345678', service_id: 2 },
      { name: 'Restaurante La Parrilla', address: 'Calle 30 #12-40, Medellín', phone: '3001234567', service_id: 3  },
      { name: 'Restaurante La Casa del Sabor', address: 'Carrera 45 #30-55, Cali', phone: '3109876543', service_id: 4 }
    ])
  }
}
