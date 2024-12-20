import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contract from 'App/Models/Contract'
import NotificationService from 'App/Services/NotificationService'
import ContractValidator from 'App/Validators/ContractValidator'

export default class ContractsController {
  /**
   * Encuentra un contrato por ID o lista todos los contratos con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const contract = await Contract.findOrFail(params.id)
      await contract.load('client') // Cargar cliente relacionado
      await contract.load('route') // Cargar rutas relacionadas
      await contract.load('payment') // Cargar pagos relacionados
      return contract
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Contract.query().paginate(page, perPage)
      } else {
        return await Contract.query()
      }
    }
  }

  /**
   * Crea un nuevo contrato.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(ContractValidator)
    const contract = await Contract.create(payload)

    // Enviar correo electrónico
    const notificationService = new NotificationService()
    const emailData = {
      subject: 'Nuevo Contrato Creado',
      recipient: 'edisson.ramirez29529@ucaldas.edu.co',
      body_html: `<p>Se ha creado un nuevo contrato con ID: ${contract.id}</p>`
    }
    await notificationService.sendEmail(emailData)

    return contract
  }

  /**
   * Actualiza un contrato existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(ContractValidator)
    const contract = await Contract.findOrFail(params.id)
    contract.merge(payload) 
    await contract.save()
    return contract
  }

  /**
   * Elimina un contrato por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const contract = await Contract.findOrFail(params.id)
    await contract.delete()
    return response.noContent()
  }
}
