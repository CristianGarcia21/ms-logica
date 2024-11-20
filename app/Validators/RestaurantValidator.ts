import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestaurantValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    phone: schema.string([
      rules.minLength(10),
      rules.maxLength(10)
    ]),
    name: schema.string([
      rules.minLength(4),
      rules.maxLength(100)
    ])
  })

  public messages: CustomMessages = {}
}
