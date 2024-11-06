import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'

export default class Contract extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public start_date : Date

  @column()
  public end_date : Date

  @column()
  public amount : number

  @column()
  public estate : boolean

  @column()
  public client_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Client, {
    //Este es el nombre de la clave foránea
    foreignKey: 'client_id'
  })
  public client: BelongsTo<typeof Client>
}
