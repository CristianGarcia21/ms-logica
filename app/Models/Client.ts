import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Contract from './Contract'
import Product from './Product'
import Company from './Company'
import NaturalPerson from './NaturalPerson'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public zip_code: string

  @column()
  public user_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Contract, {
    foreignKey: 'client_id'
  })
  public contract: HasMany<typeof Contract>

  @hasMany(() => Product, {
    foreignKey: 'client_id'
  })
  public product: HasMany<typeof Product>

  @hasOne(() => Company, {
    foreignKey: "client_id", //Clave foránea que relaciona la identidad dominada
  })
  public companies: HasOne<typeof Company>;

  @hasOne(() => NaturalPerson, {
    foreignKey: "client_id", //Clave foránea que relaciona la identidad dominada
  })
  public naturalPerson: HasOne<typeof NaturalPerson>;
}
