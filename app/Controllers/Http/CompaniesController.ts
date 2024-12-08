import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import CompanyValidator from 'App/Validators/CompanyValidator'

export default class CompaniesController {
  /**
   * Encuentra una compañía por ID o lista todas las compañías con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const company = await Company.findOrFail(params.id)
      await company.load('client') // Cargar cliente relacionado
     // await company.load('naturalPerson') // Cargar persona natural relacionada
      return company
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Company.query().paginate(page, perPage)
      } else {
        return await Company.query()
      }
    }
  }

  /**
   * Crea una nueva compañía.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(CompanyValidator)
    const company = await Company.create(payload)
    return company
  }

  /**
   * Actualiza una compañía existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(CompanyValidator)
    const company = await Company.findOrFail(params.id)
    company.merge(payload)
    await company.save()
    return company
  }

  /**
   * Elimina una compañía por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const company = await Company.findOrFail(params.id)
    await company.delete()
    return response.noContent()
  }
}
