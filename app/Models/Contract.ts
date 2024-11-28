import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import Route from './Route'
import Payment from './Payment'

export default class Contract extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date()
  public start_date : DateTime

  @column.date()
  public end_date : DateTime

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

  @hasMany(() => Route,{
    foreignKey: 'contract_id'
  })
  public route: HasMany<typeof Route>

  @hasMany(() => Payment,{
    foreignKey: 'contract_id'
  })
  public payment: HasMany<typeof Payment>
}
