import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Municipality from 'App/Models/Municipality'
import MunicipalityValidator from 'App/Validators/MunicipalityValidator'

export default class MunicipalitiesController {
  /**
   * Encuentra un municipio por ID o lista todos los municipios con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      // Buscar un municipio específico y cargar su departamento
      const municipality = await Municipality.findOrFail(params.id)
      await municipality.load('department')
      return municipality
    } else {
      const data = request.all()

      if ('page' in data && 'per_page' in data) {
        // Consulta paginada con la relación cargada
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Municipality.query().preload('department').paginate(page, perPage)
      } else {
        // Listar todos los municipios con la relación cargada
        return await Municipality.query().preload('department')
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
  /**
   * Obtiene todas las direcciones de un municipio específico
   */
  public async addresses({ params }: HttpContextContract) {
    const municipalityId = params.id

    // Encuentra el municipio con el ID proporcionado
    const municipality = await Municipality.findOrFail(municipalityId)

    // Precarga las direcciones relacionadas
    await municipality.load('addresses')

    // Devuelve las direcciones
    return municipality.addresses
  }
}
