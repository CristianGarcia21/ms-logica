import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class DepartmentValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.required(),
      rules.unique({ table: 'departments', column: 'name' }),
    ]),
  })

  public messages = {
    'name.required': 'El nombre del departamento es obligatorio.',
    'name.unique': 'El nombre del departamento ya existe.',
  }
}
