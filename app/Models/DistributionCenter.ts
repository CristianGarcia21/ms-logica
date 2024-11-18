import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import Municipality from './Municipality'

export default class DistributionCenter extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public address_id: number

  @column()
  public municipality_id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Municipality,{
    foreignKey: 'municipality_id'
  })
  public municipality: BelongsTo<typeof Municipality>

  @belongsTo(() => Address,{
    foreignKey: 'address_id'
  })
  public address: BelongsTo<typeof Address>
}
