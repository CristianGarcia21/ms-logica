import { schema } from '@ioc:Adonis/Core/Validator';

export default class MessageValidator {
  public schema = schema.create({
    content: schema.string({ trim: true }), // Contenido del mensaje
    userId: schema.number(), // ID del usuario remitente
  });

  public messages = {
    'content.required': 'El contenido del mensaje es obligatorio.',
    'content.string': 'El contenido del mensaje debe ser un texto válido.',
    'userId.required': 'El ID del usuario es obligatorio.',
    'userId.number': 'El ID del usuario debe ser un número.',
  };
}
