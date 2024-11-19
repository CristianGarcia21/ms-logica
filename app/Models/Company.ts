import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne } from '@ioc:Adonis/Lucid/Orm'
import NaturalPerson from './NaturalPerson'
import Client from './Client'
import { hasOne } from '@ioc:Adonis/Lucid/Orm'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public nit: string

  @column()
  public client_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => NaturalPerson, {
    foreignKey: 'natural_person_id'
  })
  public naturalPerson: HasOne<typeof NaturalPerson>

  @belongsTo(() => Client, {
    foreignKey: 'client_id'
  })
  public client: BelongsTo<typeof Client>
}
