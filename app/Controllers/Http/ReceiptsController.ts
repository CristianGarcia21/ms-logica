import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Invoice from 'App/Models/Receipt';

export default class ReceiptsController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theInvoice: Invoice = await Invoice.findOrFail(params.id)
            //await theInvoice.load("")
            return theInvoice;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Invoice.query().paginate(page, perPage)
            }else {
                return await Invoice.query()
            }
    
        }
    }

    public async create({ request }: HttpContextContract) {
        // await request.validate(InvoiceValidator)
        const body = request.body();
        const theInvoice: Invoice = await Invoice.create(body);
        return theInvoice;
    }

    public async update({ params, request }: HttpContextContract) {
        const theInvoice: Invoice = await Invoice.findOrFail(params.id);
        const body = request.body();
        theInvoice.description = body.description;
        theInvoice.start_date = body.start_date;
        theInvoice.due_date = body.due_date;
        theInvoice.value = body.value;
        theInvoice.state = body.state;
        theInvoice.payment_id = body.payment_id;

        return await theInvoice.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theInvoice: Invoice = await Invoice.findOrFail(params.id);
            response.status(204);
            return await theInvoice.delete();
    }


}
