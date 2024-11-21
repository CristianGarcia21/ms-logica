import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DistributionCenter from 'App/Models/DistributionCenter'
import DistributionCenterValidator from 'App/Validators/DistributionCenterValidator'

export default class DistributionCentersController {
  /**
   * Encuentra un centro de distribución por ID o lista todos los centros con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const distributionCenter = await DistributionCenter.findOrFail(params.id)
      await distributionCenter.load('municipality') // Cargar relación con el municipio
      await distributionCenter.load('address') // Cargar relación con la dirección
      return distributionCenter
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await DistributionCenter.query().paginate(page, perPage)
      } else {
        return await DistributionCenter.query()
      }
    }
  }

  /**
   * Crea un nuevo centro de distribución.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(DistributionCenterValidator) // Validar datos de entrada
    const distributionCenter = await DistributionCenter.create(payload)
    return distributionCenter
  }

  /**
   * Actualiza un centro de distribución existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(DistributionCenterValidator) // Validar datos de entrada
    const distributionCenter = await DistributionCenter.findOrFail(params.id)
    distributionCenter.merge(payload) // Actualizar campos validados
    await distributionCenter.save()
    return distributionCenter
  }

  /**
   * Elimina un centro de distribución por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const distributionCenter = await DistributionCenter.findOrFail(params.id)
    await distributionCenter.delete()
    return response.noContent()
  }
}
