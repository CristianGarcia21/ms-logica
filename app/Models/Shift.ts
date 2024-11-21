import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Driver from './Driver'

export default class Shift extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public driver_id: number

  @column()
  public start_time: DateTime

  @column()
  public end_time: DateTime

  @column()
  public start_mileage: number

  @column()
  public end_mileage: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Driver, {
    foreignKey: 'driver_id'
  })
  public driver: BelongsTo<typeof Driver>

}
