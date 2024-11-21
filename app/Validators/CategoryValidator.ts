import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CategoryValidator {
  public schema = schema.create({
    name: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'categories', column: 'name' }), // Garantiza unicidad
      rules.minLength(3),
    ]),
    parent_id: schema.number.optional([
      rules.exists({ table: 'categories', column: 'id' }), // Verifica que exista en la tabla `categories`
    ]),
  })

  public messages = {
    'name.required': 'El nombre de la categoría es obligatorio.',
    'name.unique': 'El nombre de la categoría ya está en uso.',
    'name.minLength': 'El nombre de la categoría debe tener al menos 3 caracteres.',
    'parent_id.exists': 'La categoría padre especificada no existe.',
  }
}
