import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'
import Client from './Client'
import User from './User'

export default class NaturalPerson extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cedula: string

  @column()
  public birth_date: Date

  @column()
  public company_id: number

  @column()
  public client_id: number

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Company,{
    foreignKey: 'company_id'
  })
  public company: BelongsTo<typeof Company>
  
  @belongsTo(() => Client,{
    foreignKey: 'client_id'
  })
  public client: BelongsTo<typeof Client>

  @belongsTo(() => User,{
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>
}
