import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Lot from './Lot'
import Stage from './Stage'
import Contract from './Contract'
import Vehicle from './Vehicle'

// (DirListaOrden)

export default class Route extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contract_id: number

  @column()
  public vehicle_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Lot, {
    foreignKey: 'route_id'
  })
  public lot: HasMany<typeof Lot>

  @hasMany(() => Stage, {
    foreignKey: 'route_id'
  })
  public stage: HasMany<typeof Stage>

  @belongsTo(() => Contract,{
    foreignKey: 'contract_id'
  })
  public contract: BelongsTo<typeof Contract>

  @belongsTo(() => Vehicle,{
    foreignKey: 'vehicle_id'
  })
  public vehicle: BelongsTo<typeof Vehicle>
}
