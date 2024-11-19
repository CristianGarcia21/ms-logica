import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Installment from './Payment'

export default class Receipt extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column()
  public start_date: Date

  @column()
  public due_date: Date

  @column()
  public value: number

  @column()
  public state: string

  @column()
  public installment_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Installment,{
    foreignKey: 'installment_id'
  })
  public installment: BelongsTo<typeof Installment>
}
