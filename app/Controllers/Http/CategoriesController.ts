import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import CategoryValidator from 'App/Validators/CategoryValidator'

export default class CategoriesController {
  /**
   * Encuentra una categoría o lista todas las categorías con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const category = await Category.findOrFail(params.id)
      await category.load('subcategory')
      await category.load('parentCategory')
      return category
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Category.query().paginate(page, perPage)
      } else {
        return await Category.query()
      }
    }
  }

  /**
   * Crea una nueva categoría.
   */
  public async create({ request }: HttpContextContract) {
    // Validar los datos con el validador
    const payload = await request.validate(CategoryValidator)
    const category = await Category.create(payload)
    return category
  }

  /**
   * Actualiza una categoría existente.
   */
  public async update({ params, request }: HttpContextContract) {
    // Validar los datos con el validador
    const payload = await request.validate(CategoryValidator)

    // Buscar la categoría por ID
    const category = await Category.findOrFail(params.id)

    // Actualizar los campos
    category.merge(payload)
    await category.save()
    return category
  }

  /**
   * Elimina una categoría.
   */
  public async delete({ params, response }: HttpContextContract) {
    const category = await Category.findOrFail(params.id)
    await category.delete()
    return response.noContent()
  }
}
