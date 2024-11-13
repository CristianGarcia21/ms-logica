import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Insurance extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vehicle_id: number

  @column()
  public insurance_company: string

  @column()
  public policy_number: string

  @column()
  public start_date: DateTime

  @column()
  public end_date: DateTime

  @column()
  public amount: number

  @column()
  public status: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
