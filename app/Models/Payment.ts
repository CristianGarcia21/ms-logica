import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Contract from './Contract'
import Receipt from './Receipt'

export default class Installment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public invoice_id: number

  @column()
  public amount: number

  @column()
  public start_date: DateTime

  @column()
  public end_date: DateTime

  @column()
  public status: string

  @column()
  public contract_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => Contract,{
    foreignKey: 'contract_id'
  })
  public contract: BelongsTo<typeof Contract>

  @hasOne(() => Receipt, {
    foreignKey: 'installment_id'
  })
  public receipt: HasOne<typeof Receipt>
}
