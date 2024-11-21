import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class LotValidator {
  public schema = schema.create({
    quantity: schema.number([
      rules.required(),
      rules.unsigned(), // Debe ser un número positivo
    ]),
    total_weight: schema.number([
      rules.required(),
      rules.unsigned(),
    ]),
    type: schema.enum(['perecedero', 'no perecedero', 'líquido', 'otro'] as const),
    size: schema.number([
      rules.required(),
      rules.unsigned(),
    ]),
    route_id: schema.number.optional([
      rules.exists({ table: 'routes', column: 'id' }),
    ]),
  })

  public messages = {
    'quantity.required': 'La cantidad es obligatoria.',
    'quantity.unsigned': 'La cantidad debe ser un número positivo.',
    'total_weight.required': 'El peso total es obligatorio.',
    'total_weight.unsigned': 'El peso total debe ser un número positivo.',
    'type.required': 'El tipo de lote es obligatorio.',
    'type.enum': 'El tipo debe ser uno de los valores permitidos: perecedero, no perecedero, líquido, otro.',
    'size.required': 'El tamaño es obligatorio.',
    'size.unsigned': 'El tamaño debe ser un número positivo.',
    'route_id.exists': 'La ruta especificada no existe.',
  }
}
