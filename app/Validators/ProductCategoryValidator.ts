import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductCategoryValidator {
  public schema = schema.create({
    product_id: schema.number([
      rules.required(),
      rules.exists({ table: 'products', column: 'id' }),
    ]),
    category_id: schema.number([
      rules.required(),
      rules.exists({ table: 'categories', column: 'id' }),
    ]),
  })

  public messages = {
    'product_id.required': 'El producto es obligatorio.',
    'product_id.exists': 'El producto especificado no existe.',
    'category_id.required': 'La categoría es obligatoria.',
    'category_id.exists': 'La categoría especificada no existe.',
  }
}
