import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Department from './Department'
import Address from './Address'
import DistributionCenter from './DistributionCenter'
import Operation from './Operation'

export default class Municipality extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public department_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Department, {
    // Este es el nombre de la clave foranea
    foreignKey: 'department_id'
  })
  public department: BelongsTo<typeof Department>

  @hasMany(() => Address, {
    // Este es el nombre de la clave foranea
    foreignKey: 'municipality_id'
  })
  public addresses: HasMany<typeof Address>

  @hasMany(() => DistributionCenter, {
    // Este es el nombre de la clave foranea
    foreignKey: 'municipality_id'
  })
  public distributionCenter: HasMany<typeof DistributionCenter>

  @hasMany(() => Operation, {
    // Este es el nombre de la clave foranea
    foreignKey: 'municipality_id'
  })
  public operation: HasMany<typeof Operation>
}
