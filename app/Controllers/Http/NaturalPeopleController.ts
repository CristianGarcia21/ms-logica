import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import NaturalPerson from 'App/Models/NaturalPerson';

export default class NaturalPeopleController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
        let theNaturalPerson: NaturalPerson = await NaturalPerson.findOrFail(params.id)
        return theNaturalPerson;
    } else {
        const data = request.all()
        if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await NaturalPerson.query().paginate(page, perPage)
        } else {
            return await NaturalPerson.query()
        }

    }

}
public async create({ request }: HttpContextContract) {
    // await request.validate(NaturalPersonValidator)
    const body = request.body();
    const theNaturalPerson: NaturalPerson = await NaturalPerson.create(body);
    return theNaturalPerson;
}

public async update({ params, request }: HttpContextContract) {
    const theNaturalPerson: NaturalPerson = await NaturalPerson.findOrFail(params.id);
    const body = request.body();
    theNaturalPerson.cedula = body.cedula;
    theNaturalPerson.birth_date = body.birth_date;
    theNaturalPerson.company_id = body.company_id;
    theNaturalPerson.client_id = body.client_id;
    theNaturalPerson.user_id = body.user_id;
    return await theNaturalPerson.save();
}

public async delete({ params, response }: HttpContextContract) {
    const theNaturalPerson: NaturalPerson = await NaturalPerson.findOrFail(params.id);
        response.status(204);
        return await theNaturalPerson.delete();
}
}
