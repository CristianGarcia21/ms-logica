import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Expense from 'App/Models/Expense';

export default class ExpensesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theExpense: Expense = await Expense.findOrFail(params.id)
            return theExpense;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Expense.query().paginate(page, perPage)
            } else {
                return await Expense.query()
            }
    
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body();
        const theExpense: Expense = await Expense.create(body);
        return theExpense;
    }

    public async update({ params, request }: HttpContextContract) {
        const theExpense: Expense = await Expense.findOrFail(params.id);
        const body = request.body();
        theExpense.owner_id = body.owner_id;
        return await theExpense.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theExpense: Expense = await Expense.findOrFail(params.id);
            response.status(204);
            return await theExpense.delete();
    }
    


}
