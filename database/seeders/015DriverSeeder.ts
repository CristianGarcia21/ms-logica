import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('drivers').insert([
      { license: '1234567', name: 'Juan Pérez', email: 'cristian.garcia@transportes.com', status: 'activo', user_id: 1 },
      { license: '4567890', name: 'Lucía Ortega', email: 'lucia.ortega@transportes.com', status: 'activo', user_id: 4 },
      { license: '5678901', name: 'Pedro Martínez', email: 'pedro.martinez@transportes.com', status: 'inactivo', user_id: 5 }
    ])
  }
}
