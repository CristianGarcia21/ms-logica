import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Chat from 'App/Models/Chat';
import User from 'App/Models/User';
import ChatValidator from 'App/Validators/ChatValidator';

export default class ChatsController {
  /**
   * Encuentra un chat por ID o lista todos los chats.
   */
  public async find({ request, response }: HttpContextContract) {
    const userId = request.input('userId');

    if (!userId) {
      return response.badRequest({ message: 'El userId es requerido.' });
    }

    try {
      const chats = await Chat.query()
        .where('user1_id', userId)
        .orWhere('user2_id', userId)
        .preload('user1')
        .preload('user2')
        .preload('messages', (query) => {
          query.orderBy('created_at', 'desc').limit(1);
        })
        .orderBy('updated_at', 'desc');

      return chats.map((chat) => {
        const lastMessage = chat.messages[0]?.content || 'Sin mensajes';
        return {
          ...chat.serialize(),
          lastMessage,
        };
      });
    } catch (error) {
      console.error('Error al cargar chats:', error.message);
      return response.internalServerError({ message: 'Error al cargar chats' });
    }
  }


  /**
   * Crea un nuevo chat entre dos usuarios.
   */
  public async createOrFindChat({ request, response }: HttpContextContract) {
    const { user1Email, user2Email } = request.only(['user1Email', 'user2Email']);

    if (!user1Email || !user2Email) {
      return response.badRequest({ message: 'Ambos correos son requeridos.' });
    }

    try {
      // Buscar usuarios por email
      const user1 = await User.findBy('email', user1Email);
      const user2 = await User.findBy('email', user2Email);

      // Validar que ambos usuarios existan
      if (!user1 || !user2) {
        return response.notFound({
          message: 'Uno o ambos correos no corresponden a usuarios registrados.',
        });
      }

      // Verificar si ya existe un chat entre los dos usuarios
      let chat = await Chat.query()
        .where((query) => {
          query.where('user1_id', user1.id).andWhere('user2_id', user2.id);
        })
        .orWhere((query) => {
          query.where('user1_id', user2.id).andWhere('user2_id', user1.id);
        })
        .first();

      // Crear un nuevo chat si no existe
      if (!chat) {
        chat = await Chat.create({
          user1Id: user1.id,
          user2Id: user2.id,
        });
      }

      return response.ok(chat);
    } catch (error) {
      console.error('Error al crear o encontrar chat:', error.message);
      return response.internalServerError({
        message: 'Error al crear o encontrar chat.',
      });
    }
  }


  /**
   * Elimina un chat por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const chat = await Chat.findOrFail(params.id);
    await chat.delete();
    return response.noContent();
  }




}
