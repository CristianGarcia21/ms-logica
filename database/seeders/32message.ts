import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('messages').insert([
      // Mensajes del chat 1
      {
        content: 'Hola, ¿cómo estás?',
        chat_id: 1,
        user_id: 1,

      },
      {
        content: 'Hola, estoy bien. ¿Y tú?',
        chat_id: 1,
        user_id: 2,

      },
      {
        content: 'Todo bien, gracias.',
        chat_id: 1,
        user_id: 1,

      },

      // Mensajes del chat 2
      {
        content: '¿Recibiste los documentos?',
        chat_id: 2,
        user_id: 2,

      },
      {
        content: 'Sí, los tengo. Gracias.',
        chat_id: 2,
        user_id: 3,


      },

      // Mensajes del chat 3
      {
        content: '¿Puedes llamarme más tarde?',
        chat_id: 3,
        user_id: 3,

      },
      {
        content: 'Claro, sin problema.',
        chat_id: 3,
        user_id: 4,

      },

      // Mensajes del chat 4
      {
        content: '¿Qué opinas del proyecto?',
        chat_id: 4,
        user_id: 4,

      },
      {
        content: 'Creo que va muy bien.',
        chat_id: 4,
        user_id: 1,

      },
    ])
  }
}
