import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('hotels').insert([
      { name: 'Hotel Estrella', address: 'Carrera 10 #20-30, Bogotá', phone: '3201234567', email: 'contacto@hotelestrella.com', status: 'activo', service_id: 1 },
      { name: 'Hotel Sol', address: 'Calle 50 #15-25, Medellín', phone: '3112345678', email: 'reservas@hotelsol.com', status: 'activo', service_id: 2},
      { name: 'Hotel La Paz', address: 'Avenida 30 #45-60, Cali', phone: '3009876543', email: 'info@hotellapaz.com', status: 'inactivo', service_id: 3},
      { name: 'Hotel Imperial', address: 'Calle 15 #23-50, Barranquilla', phone: '3016547890', email: 'contacto@hotelimperial.com', status: 'activo', service_id: 4}
    ])
  }
}
