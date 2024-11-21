import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Receipt from 'App/Models/Receipt'
import ReceiptValidator from 'App/Validators/ReceiptValidator'

export default class ReceiptsController {
  /**
   * Encuentra un recibo por ID o lista todos los recibos con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const receipt = await Receipt.findOrFail(params.id)
      await receipt.load('payment') // Cargar pagos relacionados
      await receipt.load('expense') // Cargar gastos relacionados
      return receipt
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Receipt.query().paginate(page, perPage)
      } else {
        return await Receipt.query()
      }
    }
  }

  /**
   * Crea un nuevo recibo.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(ReceiptValidator) // Validar datos de entrada
    const receipt = await Receipt.create(payload)
    return receipt
  }

  /**
   * Actualiza un recibo existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(ReceiptValidator) // Validar datos de entrada
    const receipt = await Receipt.findOrFail(params.id)
    receipt.merge(payload) // Actualizar datos validados
    await receipt.save()
    return receipt
  }

  /**
   * Elimina un recibo por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const receipt = await Receipt.findOrFail(params.id)
    await receipt.delete()
    return response.noContent()
  }
}
