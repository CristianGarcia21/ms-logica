import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ProductCategory from './ProductCategory'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ProductCategory, {
    foreignKey: 'category_id'
  })
  public productCategory: HasMany<typeof ProductCategory>
}
