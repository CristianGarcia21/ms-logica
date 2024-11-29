import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('services').insert([
      {name: 'Servicio de Mantenimiento',description: 'Mantenimiento preventivo y correctivo de vehículos',price: 200000,status: 'activo',administrator_id: 1},
      {name: 'Seguro de Vehículo',description: 'Seguro completo para vehículos de carga',price: 500000,status: 'activo', administrator_id: 1},
      { name: 'Asesoría Técnica', description: 'Asesoría técnica sobre optimización de flotas', price: 150000,status: 'inactivo',administrator_id: 1},
      {name: 'Transporte de Carga',description: 'Servicio de transporte para mercancías pesadas',price: 1000000, status: 'activo', administrator_id: 1}
    ])
  }
}
