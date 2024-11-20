import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestaurantDishValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
  
    price: schema.number([
      rules.range(0, 100000)
    ]),
    restaurant_id: schema.number([
      rules.exists({ table: 'restaurants', column: 'id' })
    ]),
    dish_id: schema.number([
      rules.exists({ table: 'dishes', column: 'id' })
    ])
  
  })

  public messages: CustomMessages = {}
}
