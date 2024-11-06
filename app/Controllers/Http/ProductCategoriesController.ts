import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductCategory from 'App/Models/ProductCategory';

export default class ProductCategoryCategoriesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theProductCategory: ProductCategory = await ProductCategory.findOrFail(params.id)
            await theProductCategory.load("product")
            await theProductCategory.load("category")
            return theProductCategory;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await ProductCategory.query().paginate(page, perPage)
            } else {
                return await ProductCategory.query()
            }

        }

    }
    public async create({ request }: HttpContextContract) {
        // await request.validate(ProductCategoryValidator)
        const body = request.body();
        const theProductCategory: ProductCategory = await ProductCategory.create(body);
        return theProductCategory;
    }

    public async update({ params, request }: HttpContextContract) {
        const theProductCategory: ProductCategory = await ProductCategory.findOrFail(params.id);
        const body = request.body();
        theProductCategory.product_id = body.product_id;
        theProductCategory.category_id = body.category_id;
        return await theProductCategory.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theProductCategory: ProductCategory = await ProductCategory.findOrFail(params.id);
            response.status(204);
            return await theProductCategory.delete();
    }
}
