import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address';

export default class AddressesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theAddress: Address = await Address.findOrFail(params.id)
            // await theAddress.load("product")
            return theAddress;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Address.query().paginate(page, perPage)
            } else {
                return await Address.query()
            }

        }

    }
    public async create({ request }: HttpContextContract) {
        // await request.validate(AddressValidator)
        const body = request.body();
        const theAddress: Address = await Address.create(body);
        return theAddress;
    }

    public async update({ params, request }: HttpContextContract) {
        const theAddress: Address = await Address.findOrFail(params.id);
        const body = request.body();
        theAddress.street = body.street;
        theAddress.number = body.number;
        theAddress.neighborhood = body.neighborhood;
        theAddress.department = body.department;
        theAddress.municipality_id = body.city;
        
        return await theAddress.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theAddress: Address = await Address.findOrFail(params.id);
            response.status(204);
            return await theAddress.delete();
    }
}
