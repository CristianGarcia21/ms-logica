import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lot from 'App/Models/Lot'
import LotValidator from 'App/Validators/LotValidator'

export default class LotsController {
  /**
   * Encuentra un lote por ID o lista todos los lotes con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      // Buscar un lote por su ID
      const lot = await Lot.findOrFail(params.id)
      await lot.load('product') // Cargar productos relacionados
      await lot.load('route')   // Cargar la ruta relacionada
      return lot
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Lot.query().paginate(page, perPage)
      } else {
        // Devolver todos los lotes
        return await Lot.query()
      }
    }
  }

  /**
   * Crea un nuevo lote.
   */
  public async create({ request }: HttpContextContract) {
    // Validar los datos usando LotValidator
    const payload = await request.validate(LotValidator)

    // Crear el lote con los datos validados
    const lot = await Lot.create(payload)
    return lot
  }

  /**
   * Actualiza un lote existente.
   */
  public async update({ params, request }: HttpContextContract) {
    // Validar los datos usando LotValidator
    const payload = await request.validate(LotValidator)

    // Buscar el lote por su ID
    const lot = await Lot.findOrFail(params.id)

    // Actualizar los campos con los datos validados
    lot.merge(payload)
    await lot.save()
    return lot
  }

  /**
   * Elimina un lote por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const lot = await Lot.findOrFail(params.id)
    await lot.delete()
    return response.noContent()
  }
}
