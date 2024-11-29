import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Route from './Route'
import Address from './Address'
import Lot from './Lot'

// Representa las distintas etapas que puede tener una ruta.
// Una etapa se da entre una dirección de un centro logístico y otro.

export default class Stage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public order: number

  @column()
  public address_id: number

  @column()
  public route_id: number

  @column()
  public lot_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Route, {
    foreignKey: 'route_id'
  })
  public route: BelongsTo<typeof Route>

  @belongsTo(() => Address, {
    foreignKey: 'address_id'
  })
  public address: BelongsTo<typeof Address>

  @belongsTo(() => Lot, {
    foreignKey: 'lot_id'
  })
  public lot: BelongsTo<typeof Lot>
}
