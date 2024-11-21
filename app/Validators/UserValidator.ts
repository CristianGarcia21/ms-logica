import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserValidator {
  public schema = schema.create({
    userId: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'users', column: 'userId' }), // Garantiza unicidad
      rules.minLength(3),
      rules.maxLength(50),
    ]),
    username: schema.string({}, [
      rules.required(),
      rules.minLength(3),
      rules.maxLength(50),
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(), // Valida que sea un correo electrónico válido
      rules.unique({ table: 'users', column: 'email' }), // Garantiza unicidad
    ]),
    password: schema.string({}, [
      rules.required(),
      rules.minLength(6), // Contraseña debe tener al menos 6 caracteres
    ]),
  })

  public messages = {
    'userId.required': 'El ID de usuario es obligatorio.',
    'userId.unique': 'El ID de usuario ya está registrado.',
    'userId.minLength': 'El ID de usuario debe tener al menos 3 caracteres.',
    'userId.maxLength': 'El ID de usuario no puede exceder los 50 caracteres.',
    'username.required': 'El nombre de usuario es obligatorio.',
    'username.minLength': 'El nombre de usuario debe tener al menos 3 caracteres.',
    'username.maxLength': 'El nombre de usuario no puede exceder los 50 caracteres.',
    'email.required': 'El correo electrónico es obligatorio.',
    'email.email': 'El correo electrónico debe ser válido.',
    'email.unique': 'El correo electrónico ya está registrado.',
    'password.required': 'La contraseña es obligatoria.',
    'password.minLength': 'La contraseña debe tener al menos 6 caracteres.',
  }
}
