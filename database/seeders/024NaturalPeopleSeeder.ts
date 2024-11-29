import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('natural_people').insert([
      { cedula: '123456789', birth_date: '1990-05-15', company_id: 1, client_id: 1, user_id: 1},
      { cedula: '987654321', birth_date: '1985-07-30', company_id: 2, client_id: 2, user_id: 2 },
      { cedula: '112233445', birth_date: '1992-03-25', company_id: 3, client_id: 3, user_id: 3},
      { cedula: '998877665', birth_date: '1988-12-10', company_id: 4,client_id: 4,user_id: 4},
      { cedula: '445566778',birth_date: '1995-08-20', company_id: 5, client_id: 5,user_id: 5},
    ])
  }
}
