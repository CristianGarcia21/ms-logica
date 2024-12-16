import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Message from 'App/Models/Message';
import MessageValidator from 'App/Validators/MessageValidator';

export default class MessagesController {
  /**
   * Encuentra mensajes por chat ID o lista todos los mensajes de un chat.
   */
  public async find({ params, request, response }: HttpContextContract) {
    const chatId = params.chatId;

    if (!chatId) {
      return response.badRequest({ message: 'El chatId es requerido.' });
    }

    try {
      const data = request.all();
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);

        return await Message.query()
          .where('chat_id', chatId)
          .preload('user')
          .paginate(page, perPage);
      } else {
        return await Message.query()
          .where('chat_id', chatId)
          .preload('user');
      }
    } catch (error) {
      console.error('Error al cargar mensajes:', error);
      return response.internalServerError({ message: 'Error al cargar mensajes' });
    }
  }


  /**
   * Crea un nuevo mensaje dentro de un chat.
   */
  public async create({ request, params }: HttpContextContract) {
    const payload = await request.validate(MessageValidator);

    const message = await Message.create({
      content: payload.content,
      chatId: params.chatId,
      userId: payload.userId, // Se envía el userId del remitente desde el cuerpo
    });

    // Emitir evento a través del WebSocket
    const Ws = (await import('App/Services/Ws')).default;
    Ws.io.to(`chat:${params.chatId}`).emit('newMessage', {
      id: message.id,
      content: message.content,
      userId: payload.userId,
      createdAt: message.createdAt,
    });

    return message;
  }

  /**
   * Elimina un mensaje por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const message = await Message.findOrFail(params.id);
    await message.delete();
    return response.noContent();
  }
}
