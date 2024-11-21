import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
  /**
   * Encuentra un cliente por ID o lista todos los clientes con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const client = await Client.findOrFail(params.id)
      await client.load('contract') // Cargar contratos relacionados
      await client.load('product')  // Cargar productos relacionados
      await client.load('companies') // Cargar compañía relacionada
      await client.load('naturalPerson') // Cargar persona natural relacionada
      return client
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Client.query().paginate(page, perPage)
      } else {
        return await Client.query()
      }
    }
  }

  /**
   * Crea un nuevo cliente.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(ClientValidator)
    const client = await Client.create(payload)
    return client
  }

  /**
   * Actualiza un cliente existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(ClientValidator)
    const client = await Client.findOrFail(params.id)
    client.merge(payload)
    await client.save()
    return client
  }

  /**
   * Elimina un cliente por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
    return response.noContent()
  }
}
