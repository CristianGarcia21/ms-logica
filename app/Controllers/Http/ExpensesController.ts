import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Expense from 'App/Models/Expense'
import ExpenseValidator from 'App/Validators/ExpenseValidator'

export default class ExpensesController {
  /**
   * Encuentra un gasto por ID o lista todos los gastos con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const theExpense: Expense = await Expense.findOrFail(params.id)
      // Cargar relaciones relevantes
      await theExpense.load('service')
      await theExpense.load('driver')
      await theExpense.load('owner')
      await theExpense.load('receipt')
      return theExpense
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Expense.query().paginate(page, perPage)
      } else {
        return await Expense.query()
      }
    }
  }

  /**
   * Crea un nuevo gasto.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(ExpenseValidator)
    const theExpense: Expense = await Expense.create(payload)
    return theExpense
  }

  /**
   * Actualiza un gasto existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const theExpense: Expense = await Expense.findOrFail(params.id)
    const payload = await request.validate(ExpenseValidator)
    theExpense.merge(payload)
    await theExpense.save()
    return theExpense
  }

  /**
   * Elimina un gasto por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const theExpense: Expense = await Expense.findOrFail(params.id)
    await theExpense.delete()
    return response.noContent()
  }
}
