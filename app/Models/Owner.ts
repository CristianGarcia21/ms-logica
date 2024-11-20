import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import VehicleOwner from './VehicleOwner'
import Driver from './Driver'
import User from './User'
import Expense from './Expense'

export default class Owner extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public status: boolean

  @column()
  public user_id: number

  @column()
  public driver_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => VehicleOwner, {
    foreignKey: 'owner_id'
  })
  public vehicleOwner: HasMany<typeof VehicleOwner>

  @belongsTo(() => Driver, {
    foreignKey: 'driver_id'
  })
  public driver: BelongsTo<typeof Driver>

  @belongsTo(() => User, {
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>

  @hasMany(() => Expense, {
    foreignKey: 'owner_id'
  })
  public expense: HasMany<typeof Expense>
}
