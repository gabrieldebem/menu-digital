import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";
import CreateUserValidator from "App/Validators/CreateUserValidator";
import UpdateUserValidator from "App/Validators/UpdateUserValidator";

export default class UserController {
  public async index()
  {
    return User.all();
  }

  public async store({request}: HttpContextContract)
  {
    await request.validate(CreateUserValidator)

    const user = await new User()

    user.name = request.input('name')
    user.email = request.input('email')
    user.password = await Hash.make(request.input('password'))
    await user.save()

    return user
  }

  public async show({params, response}: HttpContextContract)
  {
    const user = await User.firstOrFail(params.id)
    return response.json(user)
  }

  public async update({request, params}: HttpContextContract)
  {
    await request.validate(UpdateUserValidator)
    const user = await User.firstOrFail(params.id)

    user.name = request.input('name')
    user.email = request.input('email')
    await user.save()

    return user
  }

  public async destroy({params, response}: HttpContextContract)
  {
    const user = await User.firstOrFail(params.id)
    await user.delete();

    return response.noContent()
  }
}
