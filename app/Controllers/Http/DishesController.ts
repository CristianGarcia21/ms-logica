import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dish from 'App/Models/Dish';
import DishValidator from 'App/Validators/DishValidator';

export default class DishesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theDish: Dish = await Dish.findOrFail(params.id)
            // await theDish.load("product")
            return theDish;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Dish.query().paginate(page, perPage)
            } else {
                return await Dish.query()
            }

        }

    }
    public async create({ request }: HttpContextContract) {
        await request.validate(DishValidator)
        const body = request.body();
        const theDish: Dish = await Dish.create(body);
        return theDish;
    }

    public async update({ params, request }: HttpContextContract) {
        const theDish: Dish = await Dish.findOrFail(params.id);
        const body = request.body();
        theDish.name = body.name;
        theDish.description = body.description;
        
        return await theDish.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theDish: Dish = await Dish.findOrFail(params.id);
            response.status(204);
            return await theDish.delete();
    }
}
