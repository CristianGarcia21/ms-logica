import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from 'App/Models/Route'
import RouteValidator from 'App/Validators/RouteValidator'

export default class RoutesController {
  /**
   * Encuentra una ruta por ID o lista todas las rutas con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const route = await Route.findOrFail(params.id)
      await route.load('contract') // Cargar contrato relacionado
      await route.load('vehicle') // Cargar vehículo relacionado
      await route.load('lot') // Cargar lotes relacionados
      await route.load('stage') // Cargar etapas relacionadas
      return route
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Route.query().paginate(page, perPage)
      } else {
        return await Route.query()
      }
    }
  }

  /**
   * Crea una nueva ruta.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(RouteValidator)
    const route = await Route.create(payload)
    return route
  }

  /**
   * Actualiza una ruta existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(RouteValidator)
    const route = await Route.findOrFail(params.id)
    route.merge(payload)
    await route.save()
    return route
  }

  /**
   * Elimina una ruta por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const route = await Route.findOrFail(params.id)
    await route.delete()
    return response.noContent()
  }
}
