import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ClientValidator {
  public schema = schema.create({
    address: schema.string({}, [
      rules.required(),
    ]),
    city: schema.string({}, [
      rules.required(),
    ]),
    zip_code: schema.string({}, [
      rules.required(),
      rules.regex(/^\d{5}(-\d{4})?$/), // Formato de código postal
    ]),
    user_id: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'clients', column: 'user_id' }),
    ]),
  })

  public messages = {
    'address.required': 'La dirección es obligatoria.',
    'city.required': 'La ciudad es obligatoria.',
    'zip_code.required': 'El código postal es obligatorio.',
    'zip_code.regex': 'El código postal debe tener un formato válido.',
    'user_id.required': 'El ID de usuario es obligatorio.',
    'user_id.unique': 'El ID de usuario ya está registrado.',
  }
}
