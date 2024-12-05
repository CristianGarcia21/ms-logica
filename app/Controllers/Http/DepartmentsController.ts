import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Department from 'App/Models/Department'
import DepartmentValidator from 'App/Validators/DepartmentValidator'

export default class DepartmentsController {
  /**
   * Encuentra un departamento por ID o lista todos los departamentos con paginación.
   */
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const department = await Department.findOrFail(params.id)
      await department.load('municipality') // Cargar los municipios relacionados
      return department
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await Department.query().paginate(page, perPage)
      } else {
        return await Department.query()
      }
    }
  }

  /**
   * Crea un nuevo departamento.
   */
  public async create({ request }: HttpContextContract) {
    const payload = await request.validate(DepartmentValidator) // Validar datos de entrada
    const department = await Department.create(payload)
    return department
  }

  /**
   * Actualiza un departamento existente.
   */
  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(DepartmentValidator) // Validar datos de entrada
    const department = await Department.findOrFail(params.id)
    department.merge(payload) // Actualizar campos validados
    await department.save()
    return department
  }

  /**
   * Elimina un departamento por ID.
   */
  public async delete({ params, response }: HttpContextContract) {
    const department = await Department.findOrFail(params.id)
    await department.delete()
    return response.noContent()
  }

  public async municipalities({ params }: HttpContextContract) {
    const department = await Department.findOrFail(params.id);
    const municipalities = await department.related('municipality').query();
    return municipalities;
  }
}
