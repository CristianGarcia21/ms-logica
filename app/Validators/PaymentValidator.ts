import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class PaymentValidator {
  public schema = schema.create({
    amount: schema.number([
      rules.required(),
      rules.unsigned(), // Garantiza que sea un número positivo
    ]),
    start_date: schema.date({
      format: 'yyyy-MM-dd',
    }, [
      rules.required(),
    ]),
    end_date: schema.date({
      format: 'yyyy-MM-dd',
    }, [
      rules.required(),
      rules.afterField('start_date'), // Debe ser posterior a la fecha de inicio
    ]),
    status: schema.boolean([
      rules.required(),
    ]),
    contract_id: schema.number([
      rules.required(),
      rules.exists({ table: 'contracts', column: 'id' }), // Verifica existencia en contratos
    ]),
    receipt_id: schema.number([
      rules.required(),
      rules.exists({ table: 'receipts', column: 'id' }), // Verifica existencia en recibos
    ]),
  })

  public messages = {
    'amount.required': 'El monto es obligatorio.',
    'amount.unsigned': 'El monto debe ser un número positivo.',
    'start_date.required': 'La fecha de inicio es obligatoria.',
    'start_date.date': 'La fecha de inicio debe estar en formato yyyy-MM-dd.',
    'end_date.required': 'La fecha de finalización es obligatoria.',
    'end_date.date': 'La fecha de finalización debe estar en formato yyyy-MM-dd.',
    'end_date.afterField': 'La fecha de finalización debe ser posterior a la fecha de inicio.',
    'status.required': 'El estado es obligatorio.',
    'status.boolean': 'El estado debe ser verdadero o falso.',
    'contract_id.required': 'El ID del contrato es obligatorio.',
    'contract_id.exists': 'El contrato especificado no existe.',
    'receipt_id.required': 'El ID del recibo es obligatorio.',
    'receipt_id.exists': 'El recibo especificado no existe.',
  }
}
