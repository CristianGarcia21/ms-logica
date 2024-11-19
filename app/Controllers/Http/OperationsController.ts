import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Operation from 'App/Models/Operation';

export default class OperationsController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theOperation: Operation = await Operation.findOrFail(params.id)
            // CUando se visualice un solo producto, aparecerá el lote
            // await theOperation.load('lot')
            return theOperation;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Operation.query().paginate(page, perPage)
            } else {
                return await Operation.query()
            }

        }

    }
    public async create({ request }: HttpContextContract) {
        // await request.validate(OperationValidator)
        const body = request.body();
        const theOperation: Operation = await Operation.create(body);
        return theOperation;
    }

    public async update({ params, request }: HttpContextContract) {
        const theOperation: Operation = await Operation.findOrFail(params.id);
        const body = request.body();
        theOperation.municipality_id = body.municipality_id;
        theOperation.vehicle_id = body.vehicle_id;
        return await theOperation.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theOperation: Operation = await Operation.findOrFail(params.id);
            response.status(204);
            return await theOperation.delete();
    }
}