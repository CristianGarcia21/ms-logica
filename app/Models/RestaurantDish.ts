import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Dish from './Dish'
import Restaurant from './Restaurant'

export default class RestaurantDish extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public dish_id: number

  @column()
  public restaurant_id: number

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Dish, {
    foreignKey: 'dish_id'
  })
  public dishes: BelongsTo<typeof Dish>

  @belongsTo(() => Restaurant, {
    foreignKey: 'restaurant_id'
  })
  public restaurants: BelongsTo<typeof Restaurant>
}
