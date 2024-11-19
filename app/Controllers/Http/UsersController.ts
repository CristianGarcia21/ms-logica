import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import UserService from 'App/Services/UserService';

export default class UserController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
        let theUser: User = await User.findOrFail(params.id)
        // await theUser.load("product")
        return theUser;
    } else {
        const data = request.all()
        if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await User.query().paginate(page, perPage)
        } else {
            return await User.query()
        }

    }

}
public async create({ request }: HttpContextContract) {
    // await request.validate(UserValidator)
    const body = request.body();
    const theUser: User = await User.create(body);
    return theUser;
}

public async update({ params, request }: HttpContextContract) {
    const theUser: User = await User.findOrFail(params.id);
    const body = request.body();
    theUser.userId = body.userId;


    return await theUser.save();
}

public async delete({ params, response }: HttpContextContract) {
    const theUser: User = await User.findOrFail(params.id);
        response.status(204);
        return await theUser.delete();
}

public async fetchFromSecurityService({ request, response }: HttpContextContract) {
  const token = request.header('Authorization')

  if (!token) {
    return response.unauthorized({ message: 'Bearer token is required' })
  }

  try {
    const securityData = await UserService.fetchUserData(token)

    // Busca al usuario por userId
    let user = await User.findBy('userId', securityData.userId)

    if (user) {
      // Si el usuario existe, actualiza su información
      user.username = securityData.username
      user.email = securityData.email
      user.password = 'hashed_password' // Asegúrate de hashear la contraseña antes de guardarla
      await user.save()
    } else {
      // Si el usuario no existe, crea un nuevo usuario
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
}
