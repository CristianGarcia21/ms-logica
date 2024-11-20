import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RestaurantDish from 'App/Models/RestaurantDish';
import RestaurantDishValidator from 'App/Validators/RestaurantDishValidator';

export default class RestaurantDishesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theRestaurantDish: RestaurantDish = await RestaurantDish.findOrFail(params.id)
            await theRestaurantDish.load("dishes")
            await theRestaurantDish.load("restaurants")
            return theRestaurantDish;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await RestaurantDish.query().paginate(page, perPage)
            }else {
                return await RestaurantDish.query()
            }
    
        }
    }

    public async create({ request }: HttpContextContract) {
        await request.validate(RestaurantDishValidator)
        const body = request.body();
        const theRestaurantDish: RestaurantDish = await RestaurantDish.create(body);
        return theRestaurantDish;
    }

    public async update({ params, request }: HttpContextContract) {
        const theRestaurantDish: RestaurantDish = await RestaurantDish.findOrFail(params.id);
        const body = request.body();
        theRestaurantDish.dish_id = body.dish_id;
        theRestaurantDish.restaurant_id = body.restaurant_id;
        theRestaurantDish.price = body.price;

        return await theRestaurantDish.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theRestaurantDish: RestaurantDish = await RestaurantDish.findOrFail(params.id);
            response.status(204);
            return await theRestaurantDish.delete();
    }
}
