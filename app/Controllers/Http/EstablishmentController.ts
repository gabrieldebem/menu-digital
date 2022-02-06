import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Establishment from "App/Models/Establishment";

export default class EstablishmentController {
  public async index({}: HttpContextContract)
  {
    return Establishment.all();
  }

  public async store({request}: HttpContextContract)
  {
    const establishment = await new Establishment()

    establishment.name = request.input('name')
    establishment.document = request.input('document')
    establishment.slogan = request.input('slogan')
    establishment.primary_color = request.input('primary_color')
    establishment.secondary_color = request.input('secondary_color')
    establishment.tertiary_color = request.input('tertiary_color')
    await establishment.save()

    return establishment
  }

  public async show({params, response}: HttpContextContract)
  {
    const establishment = await Establishment.findOrFail(params.id);
    return response.json(establishment);
  }

  public async update({params, request, response}: HttpContextContract)
  {
    const establishment = await Establishment.findOrFail(params.id);

    establishment.name = request.input('name')
    establishment.document = request.input('document')
    establishment.slogan = request.input('slogan')
    establishment.primary_color = request.input('primary_color')
    establishment.secondary_color = request.input('secondary_color')
    establishment.tertiary_color = request.input('tertiary_color')
    await establishment.save()

    return response.json(establishment)
  }

  public async destroy({params}: HttpContextContract)
  {
    const establishment = await Establishment.findOrFail(params.id);
    await establishment.delete()
  }
}
