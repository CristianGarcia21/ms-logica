import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VehicleOwner from 'App/Models/VehicleOwner';

export default class VehicleOwnersController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theVehicleOwner: VehicleOwner = await VehicleOwner.findOrFail(params.id)
            await theVehicleOwner.load("vehicle")
            await theVehicleOwner.load("owner")
            return theVehicleOwner;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await VehicleOwner.query().paginate(page, perPage)
            } else {
                return await VehicleOwner.query()
            }
    
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body();
        const theVehicleOwner: VehicleOwner = await VehicleOwner.create(body);
        return theVehicleOwner;
    }

    public async update({ params, request }: HttpContextContract) {
        const theVehicleOwner: VehicleOwner = await VehicleOwner.findOrFail(params.id);
        const body = request.body();
        theVehicleOwner.vehicle_id = body.vehicle_id;
        theVehicleOwner.owner_id = body.owner_id;
        return await theVehicleOwner.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theVehicleOwner: VehicleOwner = await VehicleOwner.findOrFail(params.id);
            response.status(204);
            return await theVehicleOwner.delete();
    }


}