import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('expenses').insert([
      {amount: 100000,description: 'Mantenimiento de vehículo',date: '2024-11-15',owner_id: 1,service_id: 1,driver_id: 1,receipt_id: 1},
      {amount: 200000,description: 'Seguro de vehículo de carga',date: '2024-11-16', owner_id: 2,service_id: 2,driver_id: 2,receipt_id: 2},
      {amount: 150000,description: 'Asesoría técnica sobre optimización de flotas', date: '2024-11-17',owner_id: 3, service_id: 3,driver_id: 3,receipt_id: 3},
      {amount: 300000,description: 'Transporte de mercancías pesadas',date: '2024-11-18',owner_id: 4, service_id: 4,driver_id: 1,receipt_id: 4},
      { amount: 250000,description: 'Seguro de vehículo de carga',date: '2024-11-19',owner_id: 5,service_id: 2,driver_id: 2,receipt_id: 5}
    ])
  }
}
