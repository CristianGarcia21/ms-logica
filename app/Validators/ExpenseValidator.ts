import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ExpenseValidator {
  public schema = schema.create({
    amount: schema.number([rules.unsigned()]),
    description: schema.string({}, [rules.maxLength(255)]),
    date: schema.date({ format: 'yyyy-MM-dd' }),
    owner_id: schema.number.optional([rules.exists({ table: 'owners', column: 'id' })]),
    service_id: schema.number([rules.exists({ table: 'services', column: 'id' })]),
    driver_id: schema.number.optional([rules.exists({ table: 'drivers', column: 'id' })]),
    receipt_id: schema.number.optional([rules.exists({ table: 'receipts', column: 'id' })]),
  })

  public messages = {
    'amount.required': 'El monto es obligatorio.',
    'description.required': 'La descripción es obligatoria.',
    'date.format': 'El formato de la fecha debe ser YYYY-MM-DD.',
    'owner_id.exists': 'El propietario no existe.',
    'service_id.exists': 'El servicio no existe.',
    'driver_id.exists': 'El conductor no existe.',
    'receipt_id.exists': 'El recibo no existe.',
  }
}
