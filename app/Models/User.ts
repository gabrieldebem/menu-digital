import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({serializeAs: null})
  public password: string

  @column({serializeAs: null})
  public remember_token: string

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
