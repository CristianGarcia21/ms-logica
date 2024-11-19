import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Driver from './Driver'
import Vehicle from './Vehicle'

export default class VehicleDriver extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vehicle_id: number

  @column()
  public driver_id: number

  @column()
  public status: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Driver, {
    foreignKey: 'driver_id'
  })
  public driver: BelongsTo<typeof Driver>

  @belongsTo(() => Vehicle, {
    foreignKey: 'vehicle_id'
  })
  public vehicle: BelongsTo<typeof Vehicle>


}
