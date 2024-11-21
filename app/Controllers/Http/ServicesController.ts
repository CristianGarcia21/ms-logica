import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'
import ServiceValidator from 'App/Validators/ServiceValidator'

export default class ServicesController {
  /**
   * Encuentra un servicio por ID o lista todos los servicios con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const service = await Service.findOrFail(params.id)
      await service.load('expense') // Cargar gastos relacionados
      await service.load('administrator') // Cargar el administrador relacionado
      return service
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Service.query().paginate(page, perPage)
      } else {
        return await Service.query()
      }
    }
  }

  /**
   * Crea un nuevo servicio.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(ServiceValidator)
    const service = await Service.create(payload)
    return service
  }

  /**
   * Actualiza un servicio existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(ServiceValidator)
    const service = await Service.findOrFail(params.id)
    service.merge(payload)
    await service.save()
    return service
  }

  /**
   * Elimina un servicio por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const service = await Service.findOrFail(params.id)
    await service.delete()
    return response.noContent()
  }
}
