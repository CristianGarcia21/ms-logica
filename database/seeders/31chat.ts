import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run() {
    await Database.table('chats').insert([
      {
        user1_id: 1, // Usuario creador del chat
        user2_id: 2, // Usuario con el que está conversando
        created_at: new Date(), // Fecha de creación
        updated_at: new Date(), // Última actualización
      },
      {
        user1_id: 2,
        user2_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user1_id: 3,
        user2_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user1_id: 4,
        user2_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user1_id: 1,
        user2_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  }
}
