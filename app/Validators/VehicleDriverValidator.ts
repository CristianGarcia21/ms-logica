import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class VehicleDriverValidator {
  public schema = schema.create({
    vehicle_id: schema.number([
      rules.required(),
      rules.exists({ table: 'vehicles', column: 'id' }),
    ]),
    driver_id: schema.number([
      rules.required(),
      rules.exists({ table: 'drivers', column: 'id' }),
    ]),
    status: schema.enum(['activo', 'inactivo'] as const),
  })

  public messages = {
    'vehicle_id.required': 'El ID del vehículo es obligatorio.',
    'vehicle_id.exists': 'El vehículo especificado no existe.',
    'driver_id.required': 'El ID del conductor es obligatorio.',
    'driver_id.exists': 'El conductor especificado no existe.',
    'status.required': 'El estado es obligatorio.',
    'status.enum': 'El estado debe ser "activo" o "inactivo".',
  }
}
