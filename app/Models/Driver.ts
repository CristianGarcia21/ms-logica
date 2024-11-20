import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Owner from './Owner'
import User from './User'
import Expense from './Expense'
import VehicleDriver from './VehicleDriver'

export default class Driver extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public license: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public status: string

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Owner, {
    foreignKey: 'driver_id'
  })
  public owner: HasOne<typeof Owner>

  @belongsTo(() => User, {
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>

  @hasMany(() => Expense, {
    foreignKey: 'driver_id'
  })
  public expense: HasMany<typeof Expense>

  @hasMany(() => VehicleDriver, {
    foreignKey: 'driver_id'
  })
  public vehicleDriver: HasMany<typeof VehicleDriver>
}
