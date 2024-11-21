import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RestaurantValidator {
  public schema = schema.create({
    name: schema.string({}, [
      rules.required(),
      rules.minLength(3),
    ]),
    address: schema.string({}, [
      rules.required(),
    ]),
    phone: schema.string({}, [
      rules.required(),
      rules.mobile({ locale: ['es-MX', 'es-CO'] }), // Ajusta el formato según tu región
    ]),
    service_id: schema.number.optional([
      rules.exists({ table: 'services', column: 'id' }),
    ]),
  })

  public messages = {
    'name.required': 'El nombre del restaurante es obligatorio.',
    'name.minLength': 'El nombre debe tener al menos 3 caracteres.',
    'address.required': 'La dirección es obligatoria.',
    'phone.required': 'El teléfono es obligatorio.',
    'phone.mobile': 'El teléfono debe ser un número válido.',
    'service_id.exists': 'El servicio especificado no existe.',
  }
}
