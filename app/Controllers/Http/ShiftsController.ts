import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Shift from 'App/Models/Shift'
import ShiftValidator from 'App/Validators/ShiftValidator'

export default class ShiftsController {
  /**
   * Encuentra un turno por ID o lista todos los turnos con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const theShift: Shift = await Shift.findOrFail(params.id)
      await theShift.load('driver') // Carga la relación con el conductor
      return theShift
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Shift.query().paginate(page, perPage)
      } else {
        return await Shift.query()
      }
    }
  }

  /**
   * Crea un nuevo turno.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(ShiftValidator)
    
    const theShift: Shift = await Shift.create(payload)
    return theShift
  }

  /**
   * Actualiza un turno existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(ShiftValidator)
    const theShift: Shift = await Shift.findOrFail(params.id)
    theShift.merge(payload)
    await theShift.save()
    return theShift
  }

  /**
   * Elimina un turno por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const theShift: Shift = await Shift.findOrFail(params.id)
    await theShift.delete()
    return response.noContent()
  }
}
