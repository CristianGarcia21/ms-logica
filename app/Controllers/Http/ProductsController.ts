import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';

export default class ProductsController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theProduct: Product = await Product.findOrFail(params.id)
            // CUando se visualice un solo producto, aparecerá el lote
            await theProduct.load('lot')
            return theProduct;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Product.query().paginate(page, perPage)
            } else {
                return await Product.query()
            }

        }

    }
    public async create({ request }: HttpContextContract) {
        // await request.validate(ProductValidator)
        const body = request.body();
        const theProduct: Product = await Product.create(body);
        return theProduct;
    }

    public async update({ params, request }: HttpContextContract) {
        const theProduct: Product = await Product.findOrFail(params.id);
        const body = request.body();
        theProduct.description = body.name;
        theProduct.weight = body.name;
        theProduct.size = body.name;
        theProduct.type = body.name;
        theProduct.lot_id = body.lot_id;
        theProduct.client_id = body.client_id
        return await theProduct.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theProduct: Product = await Product.findOrFail(params.id);
            response.status(204);
            return await theProduct.delete();
    }
}
