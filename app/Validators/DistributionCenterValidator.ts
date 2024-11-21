import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class DistributionCenterValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.required(),
    ]),
    address_id: schema.number([
      rules.required(),
      rules.exists({ table: 'addresses', column: 'id' }),
    ]),
    municipality_id: schema.number([
      rules.required(),
      rules.exists({ table: 'municipalities', column: 'id' }),
    ]),
  })

  public messages = {
    'name.required': 'El nombre del centro de distribución es obligatorio.',
    'address_id.required': 'El ID de la dirección es obligatorio.',
    'address_id.exists': 'La dirección especificada no existe.',
    'municipality_id.required': 'El ID del municipio es obligatorio.',
    'municipality_id.exists': 'El municipio especificado no existe.',
  }
}
