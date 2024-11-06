import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contract from 'App/Models/Contract';

export default class ContractsController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
        let theContract: Contract = await Contract.findOrFail(params.id)
        return theContract;
    } else {
        const data = request.all()
        if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Contract.query().paginate(page, perPage)
        } else {
            return await Contract.query()
        }

    }

}
public async create({ request }: HttpContextContract) {
    // await request.validate(ContractValidator)
    const body = request.body();
    const theContract: Contract = await Contract.create(body);
    return theContract;
}

public async update({ params, request }: HttpContextContract) {
    const theContract: Contract = await Contract.findOrFail(params.id);
    const body = request.body();
    theContract.start_date = body.start_date;
    theContract.end_date = body.end_date;
    theContract.amount = body.amount;
    theContract.estate = body.estate;
    return await theContract.save();
}

public async delete({ params, response }: HttpContextContract) {
    const theContract: Contract = await Contract.findOrFail(params.id);
        response.status(204);
        return await theContract.delete();
}
}
