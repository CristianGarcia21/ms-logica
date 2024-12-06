import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AddressValidator {
  public schema = schema.create({
    street: schema.string({ trim: true }, [
      rules.required(),
    ]),
    number: schema.number([
      rules.required(),
      rules.unsigned(),
    ]),
    neighborhood: schema.string({ trim: true }, [
      rules.required(),
    ]),
    department: schema.string({ trim: true }, [
      rules.required(),
    ]),
    municipality_id: schema.number([
      rules.required(),
      rules.exists({ table: 'municipalities', column: 'id' }),
    ]),
  })

  public messages = {
    'street.required': 'La calle es obligatoria.',
    'number.required': 'El número es obligatorio.',
    'number.unsigned': 'El número debe ser un valor positivo.',
    'neighborhood.required': 'El barrio es obligatorio.',
    'department.required': 'El departamento es obligatorio.',
    'municipality_id.required': 'El ID del municipio es obligatorio.',
    'municipality_id.exists': 'El municipio especificado no existe.',
  }
}
