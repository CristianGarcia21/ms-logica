import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Operation from 'App/Models/Operation'
import OperationValidator from 'App/Validators/OperationValidator'

export default class OperationsController {
    /**
     * Encuentra una operación por ID o lista todas las operaciones con paginación.
     */
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            const theOperation: Operation = await Operation.findOrFail(params.id)
            // Cargar relaciones
            await theOperation.load('municipality')
            await theOperation.load('vehicle')
            return theOperation
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Operation.query().paginate(page, perPage)
            } else {
                return await Operation.query()
            }
        }
    }

    /**
     * Crea una nueva operación.
     */
    public async create({ request }: HttpContextContract) {
        const payload = await request.validate(OperationValidator)
        const theOperation: Operation = await Operation.create(payload)
        return theOperation
    }

    /**
     * Actualiza una operación existente.
     */
    public async update({ params, request }: HttpContextContract) {
        const theOperation: Operation = await Operation.findOrFail(params.id)
        const payload = await request.validate(OperationValidator)
        theOperation.merge(payload)
        await theOperation.save()
        return theOperation
    }

    /**
     * Elimina una operación por ID.
     */
    public async delete({ params, response }: HttpContextContract) {
        const theOperation: Operation = await Operation.findOrFail(params.id)
        await theOperation.delete()
        return response.noContent()
    }
}
