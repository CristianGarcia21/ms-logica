import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ReceiptValidator {
  public schema = schema.create({
    customer_id: schema.number([
      rules.required(),
    ]),
    total_amount: schema.number([
      rules.required(),
      rules.unsigned(),
    ]),
    status: schema.boolean([
      rules.required(),
    ]),
  })

  public messages = {
    'customer_id.required': 'El ID del cliente es obligatorio.',
    'total_amount.required': 'El monto total es obligatorio.',
    'total_amount.unsigned': 'El monto total debe ser un número positivo.',
    'status.required': 'El estado es obligatorio.',
  }
}
