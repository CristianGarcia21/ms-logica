import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from 'App/Models/Vehicle'
import UpdateLocationValidator from 'App/Validators/UpdateLocationValidator'
import VehicleValidator from 'App/Validators/VehicleValidator'

export default class VehiclesController {
  /**
   * Encuentra un vehículo por ID o lista todos los vehículos con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const vehicle = await Vehicle.findOrFail(params.id)
      await vehicle.load('route') // Cargar rutas relacionadas
      await vehicle.load('operation') // Cargar operaciones relacionadas
      await vehicle.load('vehicleOwner') // Cargar propietarios relacionados
      await vehicle.load('vehicleDriver') // Cargar conductores relacionados
      await vehicle.load('insurance') // Cargar seguros relacionados
      return vehicle
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Vehicle.query().paginate(page, perPage)
      } else {
        return await Vehicle.query()
      }
    }
  }

  /**
   * Crea un nuevo vehículo.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(VehicleValidator)
    const vehicle = await Vehicle.create(payload)
    return vehicle
  }

  /**
   * Actualiza un vehículo existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(VehicleValidator)
    const vehicle = await Vehicle.findOrFail(params.id)
    vehicle.merge(payload)
    await vehicle.save()
    return vehicle
  }

  /**
   * Elimina un vehículo por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const vehicle = await Vehicle.findOrFail(params.id)
    await vehicle.delete()
    return response.noContent()
  }

  public async updateLocation({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateLocationValidator)
    const vehicle = await Vehicle.findOrFail(params.id)
    vehicle.merge(data)
    await vehicle.save()
    return vehicle
  }
}
