import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Route from './Route'
import Operation from './Operation'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public plate: string

  @column()
  public brand: string

  @column()
  public type_vehicle: string

  @column()
  public load_capacity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Route, {
    foreignKey: 'route_id'
  })
  public route: HasMany<typeof Route>

  @hasMany(() => Operation, {
    foreignKey: 'vehicle_id'
  })
  public operation: HasMany<typeof Operation>
}
