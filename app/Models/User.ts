import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Driver from './Driver'
import NaturalPerson from './NaturalPerson'
import Owner from './Owner'
import Administrator from './Administrator'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'userId' })
  public userId: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Driver, {
    foreignKey: 'user_id'
  })
  public driver: HasOne<typeof Driver>

  @hasOne(() => NaturalPerson, {
    foreignKey: 'user_id'
  })
  public naturalPerson: HasOne<typeof NaturalPerson>

  @hasOne(() => Owner, {
    foreignKey: 'user_id'
  })
  public owner: HasOne<typeof Owner>

  @hasOne(() => Administrator, {
    foreignKey: 'user_id'
  })
  public administrator: HasOne<typeof Administrator>
}
