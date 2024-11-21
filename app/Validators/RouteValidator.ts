import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RouteValidator {
  public schema = schema.create({
    contract_id: schema.number([
      rules.required(),
      rules.exists({ table: 'contracts', column: 'id' }),
    ]),
    vehicle_id: schema.number([
      rules.required(),
      rules.exists({ table: 'vehicles', column: 'id' }),
    ]),
  })

  public messages = {
    'contract_id.required': 'El contrato es obligatorio.',
    'contract_id.exists': 'El contrato especificado no existe.',
    'vehicle_id.required': 'El vehículo es obligatorio.',
    'vehicle_id.exists': 'El vehículo especificado no existe.',
  }
}
