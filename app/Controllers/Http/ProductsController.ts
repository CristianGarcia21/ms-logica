import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import ProductValidator from 'App/Validators/ProductValidator'

export default class ProductsController {
  /**
   * Encuentra un producto o lista todos los productos con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const product = await Product.findOrFail(params.id)
      // Cuando se visualiza un solo producto, cargar el lote relacionado
      await product.load('lot')
      return product
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Product.query().paginate(page, perPage)
      } else {
        return await Product.query()
      }
    }
  }

  /**
   * Crea un nuevo producto.
   */
  public async create({ request }: HttpContextContract) {
    // Validar los datos con el validador
    const payload = await request.validate(ProductValidator)
    const product = await Product.create(payload)
    return product
  }

  /**
   * Actualiza un producto existente.
   */
  public async update({ params, request }: HttpContextContract) {
    // Validar los datos con el validador
    const payload = await request.validate(ProductValidator)

    // Buscar el producto por ID
    const product = await Product.findOrFail(params.id)

    // Actualizar los campos
    product.merge(payload)
    await product.save()
    return product
  }

  /**
   * Elimina un producto.
   */
  public async delete({ params, response }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.noContent()
  }
}
