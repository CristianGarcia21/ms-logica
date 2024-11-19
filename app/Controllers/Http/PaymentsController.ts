import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Installment from 'App/Models/Payment';

export default class PaymentsController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theInstallment: Installment = await Installment.findOrFail(params.id)
            //await theInstallment.load("")
            return theInstallment;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Installment.query().paginate(page, perPage)
            }else {
                return await Installment.query()
            }
    
        }
    }

    public async create({ request }: HttpContextContract) {
        // await request.validate(InstallmentValidator)
        const body = request.body();
        const theInstallment: Installment = await Installment.create(body);
        return theInstallment;
    }

    public async update({ params, request }: HttpContextContract) {
        const theInstallment: Installment = await Installment.findOrFail(params.id);
        const body = request.body();
        theInstallment.invoice_id = body.invoice_id;
        theInstallment.amount = body.amount;
        theInstallment.start_date = body.start_date;
        theInstallment.end_date = body.end_date;
        theInstallment.status = body.status;
        theInstallment.contract_id = body.contract_id;

        return await theInstallment.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theInstallment: Installment = await Installment.findOrFail(params.id);
            response.status(204);
            return await theInstallment.delete();
    }


}
