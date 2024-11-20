import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Driver from 'App/Models/Driver';

export default class DriversController {
    public async find({ request, params }: HttpContextContract) {
       if (params.id) {
            let theDriver: Driver = await Driver.findOrFail(params.id)
            //await theDriver.load("")
            return theDriver;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Driver.query().paginate(page, perPage)
            }else {
                return await Driver.query()
            }

        }
    }

    public async create({ request }: HttpContextContract) {
        // await request.validate(DriverValidator)
        const body = request.body();
        const theDriver: Driver = await Driver.create(body);
        return theDriver;
    }

    public async update({ params, request }: HttpContextContract) {
        const theDriver: Driver = await Driver.findOrFail(params.id);
        const body = request.body();
        theDriver.license = body.license;
        theDriver.name = body.name;
        theDriver.email = body.email;
        theDriver.status = body.status;
        theDriver.user_id = body.user_id;

        return await theDriver.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theDriver: Driver = await Driver.findOrFail(params.id);
            response.status(204);
            return await theDriver.delete();
    }
}