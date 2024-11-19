import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Owner from './Owner'
import Vehicle from './Vehicle'

export default class VehicleOwner extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vehicle_id: number

  @column()
  public owner_id: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Owner, {
    foreignKey: 'owner_id'
  })
  public owner: BelongsTo<typeof Owner>

  @belongsTo(() => Vehicle, {
    foreignKey: 'vehicle_id'
  })
  public vehicle: BelongsTo<typeof Vehicle>

}