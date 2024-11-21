import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Payment from 'App/Models/Payment'
import PaymentValidator from 'App/Validators/PaymentValidator'

export default class InstallmentsController {
  /**
   * Encuentra una cuota por ID o lista todas las cuotas con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const installment = await Payment.findOrFail(params.id)
      await installment.load('contract') // Cargar contrato relacionado
      await installment.load('receipt') // Cargar recibo relacionado
      return installment
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Payment.query().paginate(page, perPage)
      } else {
        return await Payment.query()
      }
    }
  }

  /**
   * Crea una nueva cuota.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(PaymentValidator) // Validar los datos con el validador
    const installment = await Payment.create(payload)
    return installment
  }

  /**
   * Actualiza una cuota existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(PaymentValidator) // Validar los datos con el validador
    const installment = await Payment.findOrFail(params.id)
    installment.merge(payload) // Actualizar los campos validados
    await installment.save()
    return installment
  }

  /**
   * Elimina una cuota por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const installment = await Payment.findOrFail(params.id)
    await installment.delete()
    return response.noContent()
  }
}
