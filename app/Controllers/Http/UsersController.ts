import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserService from 'App/Services/UserService'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      const user = await User.findOrFail(params.id)
      return user
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await User.query().paginate(page, perPage)
      } else {
        return await User.query()
      }
    }
  }

  public async create({ request, response }: HttpContextContract) {
    const payload = await request.validate(UserValidator)
    const userId = payload.userId
    const user = await User.create(payload)


    try {
      const securityData = await UserService.fetchUserData(userId)
      console.log(securityData);

      // Actualizar los datos del usuario con la información del servicio de seguridad
      user.username = securityData.name
      user.email = securityData.email
      user.password = 'hashed_password' // Esto debería ser un hash real de la contraseña
      await user.save()

      return response.ok(user)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const payload = await request.validate(UserValidator)
    const user = await User.findOrFail(params.id)
    user.merge(payload)
    await user.save()
    return user
  }

  public async delete({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.noContent()
  }

  public async fetchFromSecurityService({ request, response }: HttpContextContract) {
    const token = request.header('Authorization')
    const userId = request.input('userId') // Obtener el userId de la solicitud

    if (!token) {
      return response.unauthorized({ message: 'El token Bearer es requerido' })
    }

    if (!userId) {
      return response.badRequest({ message: 'El userId es requerido' })
    }

    try {
      const securityData = await UserService.fetchUserData( userId)
      let user = await User.findBy('userId', securityData.userId)
      console.log(user);

      if (user) {
        user.username = securityData.name
        user.email = securityData.email
        user.password = 'hashed_password'
        await user.save()
      } else {
        user = await User.create({
          userId: securityData.userId,
          username: securityData.username,
          email: securityData.email,
          password: 'hashed_password',
        })
      }

      return response.ok(user)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async findByUserId({ params, response }: HttpContextContract) {
    const { userId } = params;

    if (!userId) {
      return response.badRequest({ message: 'El userId es requerido.' });
    }

    try {
      const user = await User.query().where('userId', userId).first();

      if (!user) {
        return response.notFound({ message: 'Usuario no encontrado.' });
      }

      return response.ok(user);
    } catch (error) {
      console.error('Error al buscar usuario por userId:', error);
      return response.internalServerError({ message: 'Error al buscar el usuario.' });
    }
  }
}

