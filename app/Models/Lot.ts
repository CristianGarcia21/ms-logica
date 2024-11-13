import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Route from './Route'

export default class Lot extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantity:number

  @column()
  public total_weight:number

  @column()
  public type:string

  @column()
  public size:number

  @column()
  public route_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Product, {
    // Este es el nombre de la clave foranea
    foreignKey: 'lot_id'
  })
  public product: HasMany<typeof Product>

  @belongsTo(() => Route, {
    foreignKey: 'route_id'
  })
  public route: BelongsTo<typeof Route>
}
