import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class NaturalPersonValidator {
  public schema = schema.create({
    cedula: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'natural_people', column: 'cedula' }),
    ]),
    birth_date: schema.date({}, [
      rules.required(),
    ]),
    company_id: schema.number.optional([
      rules.exists({ table: 'companies', column: 'id' }),
    ]),
    client_id: schema.number([
      rules.required(),
      rules.exists({ table: 'clients', column: 'id' }),
    ]),
    user_id: schema.number([
      rules.required(),
      rules.exists({ table: 'users', column: 'id' }),
    ]),
  })

  public messages = {
    'cedula.required': 'La cédula es obligatoria.',
    'cedula.unique': 'La cédula ya está registrada.',
    'birth_date.required': 'La fecha de nacimiento es obligatoria.',
    'company_id.exists': 'La compañía especificada no existe.',
    'client_id.required': 'El cliente es obligatorio.',
    'client_id.exists': 'El cliente especificado no existe.',
    'user_id.required': 'El usuario es obligatorio.',
    'user_id.exists': 'El usuario especificado no existe.',
  }
}
