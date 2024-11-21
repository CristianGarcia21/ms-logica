import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class InsuranceValidator {
  /**
   * Define el esquema de validación para el modelo `Insurance`.
   */
  public schema = schema.create({
    vehicle_id: schema.number([
      rules.required(),
      rules.exists({ table: 'vehicles', column: 'id' }),
    ]),
    insurance_company: schema.string({}, [
      rules.required(),
      rules.minLength(3),
      rules.maxLength(100),
    ]),
    policy_number: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'insurances', column: 'policy_number' }),
    ]),
    start_date: schema.date({}, [
      rules.required(),
      rules.beforeField('end_date'), // Validar que la fecha de inicio sea antes que la de fin
    ]),
    end_date: schema.date({}, [
      rules.required(),
      rules.afterField('start_date'), // Validar que la fecha de fin sea después de la de inicio
    ]),
    amount: schema.number([
      rules.required(),
      rules.range(0, 1_000_000), // Validar que el monto esté en un rango razonable
    ]),
    status: schema.boolean([
      rules.required(), // Validar que el estado sea booleano
    ]),
  })

  /**
   * Define los mensajes de error personalizados.
   */
  public messages = {
    'vehicle_id.required': 'El ID del vehículo es obligatorio.',
    'vehicle_id.exists': 'El vehículo especificado no existe en la base de datos.',
    'insurance_company.required': 'El nombre de la compañía de seguros es obligatorio.',
    'insurance_company.minLength':
      'El nombre de la compañía de seguros debe tener al menos 3 caracteres.',
    'insurance_company.maxLength':
      'El nombre de la compañía de seguros no debe exceder los 100 caracteres.',
    'policy_number.required': 'El número de póliza es obligatorio.',
    'policy_number.unique': 'El número de póliza ya está registrado.',
    'start_date.required': 'La fecha de inicio es obligatoria.',
    'start_date.beforeField': 'La fecha de inicio debe ser anterior a la fecha de fin.',
    'end_date.required': 'La fecha de fin es obligatoria.',
    'end_date.afterField': 'La fecha de fin debe ser posterior a la fecha de inicio.',
    'amount.required': 'El monto es obligatorio.',
    'amount.range': 'El monto debe estar entre 0 y 1,000,000.',
    'status.required': 'El estado del seguro es obligatorio.',
  }
}
