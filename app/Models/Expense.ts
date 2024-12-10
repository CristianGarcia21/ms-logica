import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Driver from './Driver'
import Owner from './Owner'
import Receipt from './Receipt'

export default class Expense extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public amount: number

  @column()
  public description: string

  @column.date()
  public date: DateTime;
  
  @column()
  public owner_id: number

  @column()
  public service_id: number

  @column()
  public driver_id: number

  @column()
  public receipt_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Service, {
    foreignKey: 'service_id'
  })
  public service: BelongsTo<typeof Service>

  @belongsTo(() => Driver, {
    foreignKey: 'driver_id'
  })
  public driver: BelongsTo<typeof Driver>

  @belongsTo(() => Owner, {
    foreignKey: 'owner_id'
  })
  public owner: BelongsTo<typeof Owner>

  @belongsTo(() => Receipt, {
    foreignKey: 'receipt_id'
  })
  public receipt: BelongsTo<typeof Receipt>
}
