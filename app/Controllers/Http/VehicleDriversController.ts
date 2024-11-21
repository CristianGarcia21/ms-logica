import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VehicleDriver from 'App/Models/VehicleDriver'
import VehicleDriverValidator from 'App/Validators/VehicleDriverValidator'

export default class VehicleDriversController {
  /**
   * Encuentra una asignación vehículo-conductor por ID o lista todas con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const vehicleDriver = await VehicleDriver.findOrFail(params.id)
      await vehicleDriver.load('vehicle') // Cargar vehículo relacionado
      await vehicleDriver.load('driver')  // Cargar conductor relacionado
      return vehicleDriver
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await VehicleDriver.query().paginate(page, perPage)
      } else {
        return await VehicleDriver.query()
      }
    }
  }

  /**
   * Crea una nueva asignación vehículo-conductor.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(VehicleDriverValidator) // Validar los datos de entrada
    const vehicleDriver = await VehicleDriver.create(payload)
    return vehicleDriver
  }

  /**
   * Actualiza una asignación vehículo-conductor existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(VehicleDriverValidator) // Validar los datos de entrada
    const vehicleDriver = await VehicleDriver.findOrFail(params.id)
    vehicleDriver.merge(payload) // Actualizar con los datos validados
    await vehicleDriver.save()
    return vehicleDriver
  }

  /**
   * Elimina una asignación vehículo-conductor por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const vehicleDriver = await VehicleDriver.findOrFail(params.id)
    await vehicleDriver.delete()
    return response.noContent()
  }
}
