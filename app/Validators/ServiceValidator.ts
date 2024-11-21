import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ServiceValidator {
  public schema = schema.create({
    name: schema.string({}, [
      rules.required(),
      rules.minLength(3),
    ]),
    description: schema.string.optional({}, [
      rules.maxLength(255),
    ]),
    price: schema.number([
      rules.required(),
      rules.unsigned(), // Debe ser un número positivo
    ]),
    status: schema.enum(['activo', 'inactivo'] as const),
    administrator_id: schema.number.optional([
      rules.exists({ table: 'administrators', column: 'id' }),
    ]),
  })

  public messages = {
    'name.required': 'El nombre del servicio es obligatorio.',
    'name.minLength': 'El nombre debe tener al menos 3 caracteres.',
    'description.maxLength': 'La descripción no puede exceder los 255 caracteres.',
    'price.required': 'El precio es obligatorio.',
    'price.unsigned': 'El precio debe ser un número positivo.',
    'status.required': 'El estado es obligatorio.',
    'status.enum': 'El estado debe ser "activo" o "inactivo".',
    'administrator_id.exists': 'El administrador especificado no existe.',
  }
}
