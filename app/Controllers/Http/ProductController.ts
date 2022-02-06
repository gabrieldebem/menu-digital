import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from "App/Models/Product";
import Establishment from "App/Models/Establishment";

export default class ProductController {
  public async index({}: HttpContextContract)
  {
    return Product.all();
  }

  public async store({request}: HttpContextContract)
  {
    const product = await new Product();
    const establishment = await Establishment.findOrFail(1);

    product.establishment_id = establishment.id;
    product.name = request.input('name');
    product.description = request.input('description');
    product.amount = request.input('amount');
    product.image = request.file('image')

    await product.save();

    return product;
  }

  public async show({params, response}: HttpContextContract)
  {
    const product = await Product.findOrFail(params.id)
    await product.load('establishment');
    return response.json(product);
  }


  public async update({params, request}: HttpContextContract)
  {
    const product = await Product.findOrFail(params.id);

    product.name = request.input('name');
    product.description = request.input('description');
    product.amount = request.input('amount');
    product.image = request.file('image')

    return product;
  }

  public async destroy({params, response}: HttpContextContract)
  {
    const product = await Product.findOrFail(params.id);
    await product.delete();

    return response.noContent();
  }
}
