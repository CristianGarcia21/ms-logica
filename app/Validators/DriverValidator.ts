import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class DriverValidator {
  public schema = schema.create({
    license: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'drivers', column: 'license' }),
    ]),
    name: schema.string({}, [
      rules.required(),
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'drivers', column: 'email' }),
    ]),
    status: schema.enum(['activo', 'inactivo'] as const),
    user_id: schema.number([
      rules.required(),
      rules.exists({ table: 'users', column: 'id' }),
    ]),
  })

  public messages = {
    'license.required': 'La licencia es obligatoria.',
    'license.unique': 'La licencia ya está registrada.',
    'name.required': 'El nombre es obligatorio.',
    'email.required': 'El correo es obligatorio.',
    'email.email': 'El correo debe ser válido.',
    'email.unique': 'El correo ya está registrado.',
    'status.required': 'El estado es obligatorio.',
    'status.enum': 'El estado debe ser "activo" o "inactivo".',
    'user_id.required': 'El usuario es obligatorio.',
    'user_id.exists': 'El usuario especificado no existe.',
  }
}
