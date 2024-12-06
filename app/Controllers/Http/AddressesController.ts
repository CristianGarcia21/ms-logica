import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'
import AddressValidator from 'App/Validators/AddressValidator'

export default class AddressesController {
  /**
   * Encuentra una dirección por ID o lista todas las direcciones con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const address = await Address.findOrFail(params.id);
      await address.load('municipalities'); // Precargar el municipio relacionado
      return address;
    } else {
      const data = request.all();
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);

        // Precargar la relación en la consulta paginada
        return await Address.query().preload('municipalities').paginate(page, perPage);
      } else {
        // Precargar la relación en la consulta completa
        return await Address.query().preload('municipalities');
      }
    }
  }



  /**
   * Crea una nueva dirección.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(AddressValidator) // Validar los datos de entrada
    const address = await Address.create(payload)
    return address
  }

  /**
   * Actualiza una dirección existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(AddressValidator) // Validar los datos de entrada
    const address = await Address.findOrFail(params.id)
    address.merge(payload) // Actualizar los campos validados
    await address.save()
    return address
  }

  /**
   * Elimina una dirección por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const address = await Address.findOrFail(params.id)
    await address.delete()
    return response.noContent()
  }
}
