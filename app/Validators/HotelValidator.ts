import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class HotelValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.required(),
    ]),
    address: schema.string({ trim: true }, [
      rules.required(),
    ]),
    phone: schema.string({ trim: true }, [
      rules.required(),
    ]),
    email: schema.string({ trim: true }, [
      rules.required(),
      rules.email(),
    ]),
    status: schema.string({ trim: true }, [
      rules.required(),
    ]),
    service_id: schema.number([
      rules.required(),
      rules.exists({ table: 'services', column: 'id' }),
    ]),
  })

  public messages = {
    'name.required': 'El nombre del hotel es obligatorio.',
    'address.required': 'La dirección del hotel es obligatoria.',
    'phone.required': 'El teléfono del hotel es obligatorio.',
    'email.required': 'El correo electrónico del hotel es obligatorio.',
    'email.email': 'Debe proporcionar un correo electrónico válido.',
    'status.required': 'El estado del hotel es obligatorio.',
    'service_id.required': 'El ID del servicio es obligatorio.',
    'service_id.exists': 'El servicio especificado no existe.',
  }
}
