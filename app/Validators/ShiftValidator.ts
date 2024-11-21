import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ShiftValidator {
  public schema = schema.create({
    driver_id: schema.number([
      rules.exists({ table: 'drivers', column: 'id' }), // Validar que el conductor exista
    ]),
    start_time: schema.date(),
    end_time: schema.date(),
    start_mileage: schema.number([rules.unsigned()]), // Kilometraje inicial debe ser positivo
    end_mileage: schema.number([rules.unsigned()]), // Kilometraje final debe ser positivo
  })

  public messages = {
    'driver_id.required': 'El ID del conductor es obligatorio.',
    'driver_id.exists': 'El conductor no existe en la base de datos.',
    'start_time.required': 'La hora de inicio es obligatoria.',
    'end_time.required': 'La hora de finalización es obligatoria.',
    'start_mileage.required': 'El kilometraje inicial es obligatorio.',
    'start_mileage.unsigned': 'El kilometraje inicial debe ser positivo.',
    'end_mileage.required': 'El kilometraje final es obligatorio.',
    'end_mileage.unsigned': 'El kilometraje final debe ser positivo.',
  }
}
