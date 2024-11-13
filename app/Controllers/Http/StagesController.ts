import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Stage from 'App/Models/Stage';

export default class StagesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theStage: Stage = await Stage.findOrFail(params.id)
            // await theStage.load("product")
            // await theStage.load("category")
            return theStage;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Stage.query().paginate(page, perPage)
            } else {
                return await Stage.query()
            }

        }

    }
    public async create({ request }: HttpContextContract) {
        // await request.validate(StageValidator)
        const body = request.body();
        const theStage: Stage = await Stage.create(body);
        return theStage;
    }

    public async update({ params, request }: HttpContextContract) {
        const theStage: Stage = await Stage.findOrFail(params.id);
        const body = request.body();
        theStage.order = body.order;
        theStage.address_id = body.address_id;
        theStage.route_id = body.route_id;
        return await theStage.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theStage: Stage = await Stage.findOrFail(params.id);
            response.status(204);
            return await theStage.delete();
    }
}
