import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Payment from './Payment'
import Expense from './Expense'


export default class Invoice extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customer_id: number

  @column()
  public total_amount: number

  @column()
  public status: boolean


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Payment,{
    foreignKey:'payment_id'
  })
  public payment : HasOne <typeof Payment>

  @hasOne(() => Expense,{
    foreignKey:'expense_id'
  })
  public expense : HasOne <typeof Expense>

}
