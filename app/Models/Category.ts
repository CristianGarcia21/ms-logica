import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ProductCategory from './ProductCategory'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public parent_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ProductCategory, {
    foreignKey: 'category_id'
  })
  public productCategory: HasMany<typeof ProductCategory>

  @belongsTo(() => Category, {
    foreignKey: 'parent_id'
  })
  public parentCategory: BelongsTo<typeof Category>

  @hasMany(() => Category, {
    foreignKey: 'parent_id'
  })
  public subcategory: HasMany<typeof Category>

  


}
