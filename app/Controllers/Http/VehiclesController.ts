import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from 'App/Models/Vehicle';

export default class VehiclesController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
        let theVehicle: Vehicle = await Vehicle.findOrFail(params.id)
        return theVehicle;
    } else {
        const data = request.all()
        if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Vehicle.query().paginate(page, perPage)
        } else {
            return await Vehicle.query()
        }

    }

}
public async create({ request }: HttpContextContract) {
    // await request.validate(VehicleValidator)
    const body = request.body();
    const theVehicle: Vehicle = await Vehicle.create(body);
    return theVehicle;
}

public async update({ params, request }: HttpContextContract) {
    const theVehicle: Vehicle = await Vehicle.findOrFail(params.id);
    const body = request.body();
    theVehicle.plate = body.plate;
    theVehicle.brand = body.brand;
    theVehicle.type_vehicle = body.type_vehicle;
    theVehicle.load_capacity = body.load_capacity;
    return await theVehicle.save();
}

public async delete({ params, response }: HttpContextContract) {
    const theVehicle: Vehicle = await Vehicle.findOrFail(params.id);
        response.status(204);
        return await theVehicle.delete();
}
}
