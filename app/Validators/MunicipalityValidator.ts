import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class MunicipalityValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.required(),
    ]),
    department_id: schema.number([
      rules.required(),
      rules.exists({ table: 'departments', column: 'id' }),
    ]),
  })

  public messages = {
    'name.required': 'El nombre del municipio es obligatorio.',
    'department_id.required': 'El ID del departamento es obligatorio.',
    'department_id.exists': 'El departamento especificado no existe.',
  }
}
