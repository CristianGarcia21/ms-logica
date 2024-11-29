import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Contract from './Contract'
import Receipt from './Receipt'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public amount: number

  @column.date()
  public start_date: DateTime

  @column.date()
  public end_date: DateTime

  @column()
  public status: boolean

  @column()
  public contract_id: number

  @column()
  public receipt_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => Contract,{
    foreignKey: 'contract_id'
  })
  public contract: BelongsTo<typeof Contract>

  @belongsTo(() => Receipt, {
    foreignKey: 'receipt_id'
  })
  public receipt: BelongsTo<typeof Receipt>
}
