import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hotel from 'App/Models/Hotel'
import HotelValidator from 'App/Validators/HotelValidator'

export default class HotelsController {
  /**
   * Encuentra un hotel por ID o lista todos los hoteles con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const theHotel: Hotel = await Hotel.findOrFail(params.id)
      await theHotel.load('service') // Carga la relación con el servicio
      return theHotel
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Hotel.query().paginate(page, perPage)
      } else {
        return await Hotel.query()
      }
    }
  }

  /**
   * Crea un nuevo hotel.
   */
  public async create({ request }: HttpContextContract) {
    // Validar la entrada con el validador de hoteles
    const payload = await request.validate(HotelValidator)
    const theHotel: Hotel = await Hotel.create(payload)
    return theHotel
  }

  /**
   * Actualiza un hotel existente.
   */
  public async update({ params, request }: HttpContextContract) {
    // Validar la entrada con el validador de hoteles
    const payload = await request.validate(HotelValidator)
    const theHotel: Hotel = await Hotel.findOrFail(params.id)
    theHotel.merge(payload) // Actualizar campos validados
    await theHotel.save()
    return theHotel
  }

  /**
   * Elimina un hotel por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const theHotel: Hotel = await Hotel.findOrFail(params.id)
    await theHotel.delete()
    return response.noContent()
  }
}
