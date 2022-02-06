import { DateTime } from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import {MultipartFileContract} from "@ioc:Adonis/Core/BodyParser";
import Establishment from "App/Models/Establishment";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public establishment_id: number

  @belongsTo(() => Establishment, {
    foreignKey: 'establishment_id',
  })
  public establishment: BelongsTo<typeof Establishment>

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public image: MultipartFileContract | null

  @column()
  public amount: number

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => {
      return value.toISODate()
    }
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => {
      return value.toISODate()
    }
  })
  public updatedAt: DateTime
}
