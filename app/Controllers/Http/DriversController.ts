import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Driver from 'App/Models/Driver'
import DriverValidator from 'App/Validators/DriverValidator'

export default class DriversController {
  /**
   * Encuentra un conductor por ID o lista todos los conductores con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const driver = await Driver.findOrFail(params.id)
      await driver.load('user') // Cargar usuario relacionado
      await driver.load('expense') // Cargar gastos relacionados
      await driver.load('shift') // Cargar turnos relacionados
      await driver.load('vehicleDriver') // Cargar vehículos relacionados
      return driver
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Driver.query().paginate(page, perPage)
      } else {
        return await Driver.query()
      }
    }
  }

  /**
   * Crea un nuevo conductor.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(DriverValidator)
    const driver = await Driver.create(payload)
    return driver
  }

  /**
   * Actualiza un conductor existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(DriverValidator)
    const driver = await Driver.findOrFail(params.id)
    driver.merge(payload)
    await driver.save()
    return driver
  }

  /**
   * Elimina un conductor por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const driver = await Driver.findOrFail(params.id)
    await driver.delete()
    return response.noContent()
  }
}
