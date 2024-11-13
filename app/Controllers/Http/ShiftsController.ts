import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Shift from 'App/Models/Shift';

export default class ShiftsController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theShift: Shift = await Shift.findOrFail(params.id)
            //await theShift.load("")
            return theShift;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Shift.query().paginate(page, perPage)
            }else {
                return await Shift.query()
            }
    
        }
    }

    public async create({ request }: HttpContextContract) {
        // await request.validate(ShiftValidator)
        const body = request.body();
        const theShift: Shift = await Shift.create(body);
        return theShift;
    }

    public async update({ params, request }: HttpContextContract) {
        const theShift: Shift = await Shift.findOrFail(params.id);
        const body = request.body();
        theShift.driver_id = body.driver_id;
        theShift.vehicle_id = body.vehicle_id;
        theShift.start_time = body.start_time;
        theShift.end_time = body.end_time;
        theShift.start_mileage = body.start_mileage;
        theShift.end_mileage = body.end_mileage;

        return await theShift.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theShift: Shift = await Shift.findOrFail(params.id);
            response.status(204);
            return await theShift.delete();
    }
     
}
