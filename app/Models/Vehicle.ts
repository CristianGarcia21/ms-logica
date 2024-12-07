import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Route from './Route'
import Operation from './Operation'
import VehicleOwner from './VehicleOwner'
import Insurance from './Insurance'
import VehicleDriver from './VehicleDriver'

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

  @column()
  public latitude: number | null

  @column()
  public longitude: number | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relación correcta con rutas
  @hasMany(() => Route, {
    foreignKey: 'vehicle_id'
  })
  public routes: HasMany<typeof Route>

  @hasMany(() => Operation, {
    foreignKey: 'vehicle_id'
  })
  public operation: HasMany<typeof Operation>

  @hasMany(() => VehicleOwner, {
    foreignKey: 'vehicle_id'
  })
  public vehicleOwner: HasMany<typeof VehicleOwner>

  @hasMany(() => VehicleDriver, {
    foreignKey: 'vehicle_id'
  })
  public vehicleDriver: HasMany<typeof VehicleDriver>

  @hasMany(() => Insurance, {
    foreignKey: 'vehicle_id'
  })
  public insurance: HasMany<typeof Insurance>
}
