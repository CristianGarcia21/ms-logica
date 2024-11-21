import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Municipality from 'App/Models/Municipality'
import MunicipalityValidator from 'App/Validators/MunicipalityValidator'

export default class MunicipalitiesController {
  /**
   * Encuentra un municipio por ID o lista todos los municipios con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const municipality = await Municipality.findOrFail(params.id)
      await municipality.load('department') // Cargar relación con el departamento
      return municipality
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Municipality.query().paginate(page, perPage)
      } else {
        return await Municipality.query()
      }
    }
  }

  /**
   * Crea un nuevo municipio.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(MunicipalityValidator) // Validar datos de entrada
    const municipality = await Municipality.create(payload)
    return municipality
  }

  /**
   * Actualiza un municipio existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(MunicipalityValidator) // Validar datos de entrada
    const municipality = await Municipality.findOrFail(params.id)
    municipality.merge(payload) // Actualizar campos validados
    await municipality.save()
    return municipality
  }

  /**
   * Elimina un municipio por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const municipality = await Municipality.findOrFail(params.id)
    await municipality.delete()
    return response.noContent()
  }
}
