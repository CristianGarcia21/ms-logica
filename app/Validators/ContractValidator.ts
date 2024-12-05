import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ContractValidator {
  public schema = schema.create({
    start_date: schema.date({
      format: 'yyyy-MM-dd',
    }, [
      rules.required(),
    ]),
    end_date: schema.date({
      format: 'yyyy-MM-dd',
    }, [
      rules.required(),
      rules.afterField('start_date'), // Asegura que end_date sea posterior a start_date
    ]),
    amount: schema.number([
      rules.required(),
      rules.unsigned(), // Asegura que el monto sea positivo
      rules.range(0, 100000)
    ]),
    estate: schema.boolean([
      rules.required(), // Asegura que sea un booleano (true o false)
    ]),
    //client_id: schema.number([
      //rules.required(),
//rules.exists({ table: 'clients', column: 'id' }), // Asegura que el cliente exista
    //]),
  })

  public messages = {
    'start_date.required': 'La fecha de inicio es obligatoria.',
    'start_date.date': 'La fecha de inicio debe estar en el formato yyyy-MM-dd.',
    'end_date.required': 'La fecha de finalización es obligatoria.',
    'end_date.date': 'La fecha de finalización debe estar en el formato yyyy-MM-dd.',
    'end_date.afterField': 'La fecha de finalización debe ser posterior a la fecha de inicio.',
    'amount.required': 'El monto es obligatorio.',
    'amount.unsigned': 'El monto debe ser un número positivo.',
    'estate.required': 'El estado del contrato es obligatorio.',
    'estate.boolean': 'El estado debe ser verdadero o falso.',
    'client_id.required': 'El ID del cliente es obligatorio.',
    'client_id.exists': 'El cliente especificado no existe.',
  }
}
