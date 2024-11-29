import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('clients').insert([
      { address: 'Calle 123 #45-67', city: 'Bogotá', zip_code: '110111', user_id: '6714235e6b06307806f8185a' },
      { address: 'Carrera 56 #78-90', city: 'Medellín', zip_code: '050021', user_id: '67142f5d7aeeec268c869e2c' },
      { address: 'Avenida 19 #10-20', city: 'Cali', zip_code: '760010', user_id: '6718f981354a9219132a79e5' },
      { address: 'Calle 34 #12-56', city: 'Barranquilla', zip_code: '080020', user_id: '6713122a69dd293559916648' },
      { address: 'Carrera 9 #23-45', city: 'Cartagena', zip_code: '130001', user_id: '6712e3ca64ac697a4a035228' },
      { address: 'Diagonal 12 #34-56', city: 'Bucaramanga', zip_code: '680001', user_id: '67048e96663daa65d1e001e1' },
])

  }
}
