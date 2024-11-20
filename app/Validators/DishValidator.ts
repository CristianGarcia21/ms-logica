import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DishValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    description: schema.string([
      rules.minLength(4),
      rules.maxLength(100)
    ]),
    name: schema.string([
      rules.minLength(4),
      rules.maxLength(100)
    ])
  
  })

  public messages: CustomMessages = {}
}
