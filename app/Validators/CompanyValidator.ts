import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CompanyValidator {
  public schema = schema.create({
    name: schema.string({}, [
      rules.required(),
    ]),
    nit: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'companies', column: 'nit' }),
    ]),
    client_id: schema.number([
      rules.required(),
      rules.exists({ table: 'clients', column: 'id' }),
    ]),
  })

  public messages = {
    'name.required': 'El nombre de la compañía es obligatorio.',
    'nit.required': 'El NIT es obligatorio.',
    'nit.unique': 'El NIT ya está registrado.',
    'client_id.required': 'El ID del cliente es obligatorio.',
    'client_id.exists': 'El cliente especificado no existe.',
  }
}
