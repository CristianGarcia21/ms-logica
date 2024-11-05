import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Product, {
    // Este es el nombre de la clave foranea
    foreignKey: 'lot_id'
  })
  public product: HasMany<typeof Product>
}
