import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('companies').insert([
      { name: 'Alimentos del Caribe S.A.S.', nit: '800123456-7', client_id: 1 },
      { name: 'Transportes Montoya Ltda.', nit: '800234567-8', client_id: 2 },
      { name: 'Electrodomésticos Bogotá S.A.', nit: '800345678-9', client_id: 3 },
      { name: 'Café de la Sierra E.U.', nit: '800456789-0', client_id: 4 },
      { name: 'Construcciones Torres & Cía', nit: '800567890-1', client_id: 5 },
      { name: 'Tecnología Digital S.A.S.', nit: '800678901-2', client_id: 6 }
    ])
  }
}
