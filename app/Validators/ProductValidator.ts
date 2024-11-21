import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductValidator {
  public schema = schema.create({
    description: schema.string({}, [
      rules.required(),
      rules.minLength(5),
    ]),
    weight: schema.number([
      rules.required(),
      rules.unsigned(), // Debe ser positivo
    ]),
    size: schema.number([
      rules.required(),
      rules.unsigned(), // Debe ser positivo
    ]),
    type: schema.enum(['perecedero', 'no perecedero', 'líquido', 'otro'] as const),
    lot_id: schema.number([
      rules.required(),
      rules.exists({ table: 'lots', column: 'id' }), // Verifica que exista en la tabla `lots`
    ]),
    client_id: schema.number([
      rules.required(),
      rules.exists({ table: 'clients', column: 'id' }), // Verifica que exista en la tabla `clients`
    ]),
  })

  public messages = {
    'description.required': 'La descripción del producto es obligatoria.',
    'description.minLength': 'La descripción debe tener al menos 5 caracteres.',
    'weight.required': 'El peso es obligatorio.',
    'weight.unsigned': 'El peso debe ser un número positivo.',
    'size.required': 'El tamaño es obligatorio.',
    'size.unsigned': 'El tamaño debe ser un número positivo.',
    'type.required': 'El tipo es obligatorio.',
    'type.enum': 'El tipo debe ser uno de los valores permitidos: perecedero, no perecedero, líquido, otro.',
    'lot_id.required': 'El lote es obligatorio.',
    'lot_id.exists': 'El lote especificado no existe.',
    'client_id.required': 'El cliente es obligatorio.',
    'client_id.exists': 'El cliente especificado no existe.',
  }
}
