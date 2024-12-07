import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateLocationValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    latitude: schema.number([
      rules.required(),
      rules.range(-90, 90), // Latitud válida
    ]),
    longitude: schema.number([
      rules.required(),
      rules.range(-180, 180), // Longitud válida
    ]),
  })

  public messages = {
    'latitude.required': 'La latitud es obligatoria.',
    'latitude.range': 'La latitud debe estar entre -90 y 90.',
    'longitude.required': 'La longitud es obligatoria.',
    'longitude.range': 'La longitud debe estar entre -180 y 180.',
  }
}
