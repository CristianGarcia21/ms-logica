import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class OperationValidator {
  public schema = schema.create({
    municipality_id: schema.number([
      rules.exists({ table: 'municipalities', column: 'id' }),
    ]),
    vehicle_id: schema.number([
      rules.exists({ table: 'vehicles', column: 'id' }),
    ]),
  })

  public messages = {
    'municipality_id.required': 'El ID del municipio es obligatorio.',
    'municipality_id.exists': 'El municipio proporcionado no es válido.',
    'vehicle_id.required': 'El ID del vehículo es obligatorio.',
    'vehicle_id.exists': 'El vehículo proporcionado no es válido.',
  }
}
