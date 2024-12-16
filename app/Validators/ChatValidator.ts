import { schema } from '@ioc:Adonis/Core/Validator';

export default class ChatValidator {
  public schema = schema.create({
    user1Id: schema.number(), // ID del usuario creador
    user2Id: schema.number(), // ID del usuario destinatario
  });

  public messages = {
    'user1Id.required': 'El ID del usuario creador es obligatorio.',
    'user1Id.number': 'El ID del usuario creador debe ser un número.',
    'user2Id.required': 'El ID del usuario destinatario es obligatorio.',
    'user2Id.number': 'El ID del usuario destinatario debe ser un número.',
  };
}
