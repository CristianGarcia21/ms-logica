import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Restaurant from 'App/Models/Restaurant'
import RestaurantValidator from 'App/Validators/RestaurantValidator'

export default class RestaurantsController {
  /**
   * Encuentra un restaurante por ID o lista todos los restaurantes con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const restaurant = await Restaurant.findOrFail(params.id)
      await restaurant.load('restaurantDish') // Cargar platos relacionados
      await restaurant.load('service')       // Cargar el servicio relacionado
      return restaurant
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Restaurant.query().paginate(page, perPage)
      } else {
        return await Restaurant.query()
      }
    }
  }

  /**
   * Crea un nuevo restaurante.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(RestaurantValidator)
    const restaurant = await Restaurant.create(payload)
    return restaurant
  }

  /**
   * Actualiza un restaurante existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(RestaurantValidator)
    const restaurant = await Restaurant.findOrFail(params.id)
    restaurant.merge(payload)
    await restaurant.save()
    return restaurant
  }

  /**
   * Elimina un restaurante por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const restaurant = await Restaurant.findOrFail(params.id)
    await restaurant.delete()
    return response.noContent()
  }
}
