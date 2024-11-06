import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Lot from './Lot'
import ProductCategory from './ProductCategory'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description:string

  @column()
  public weight:number

  @column()
  public size:number // Dimensiones del producto

  @column()
  public type:string // Alimentos perecederos, etc

  @column()
  public lot_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Lot, {
    // Este es el nombre de la clave foranea
    foreignKey: 'lot_id'
  })
  public lot: BelongsTo<typeof Lot>

  @hasMany(() => ProductCategory, {
    foreignKey: 'product_id'
  })
  public productCategory: HasMany<typeof ProductCategory>
}
