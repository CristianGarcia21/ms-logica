import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Municipality from './Municipality'
import Stage from './Stage'
import DistributionCenter from './DistributionCenter'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public street: string

  @column()
  public number: number

  @column()
  public neighborhood: string

  @column()
  public department: string

  @column()
  public municipality_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Municipality, {
    // Este es el nombre de la clave foranea
    foreignKey: 'municipality_id'
  })
  public municipalities: BelongsTo<typeof Municipality>

  @hasMany(() => Stage, {
    foreignKey: 'address_id'
  })
  public stage: HasMany<typeof Stage>

  @hasOne(() => DistributionCenter,{
    foreignKey:'address_id'
  })
  public distributionCenter : HasOne <typeof DistributionCenter>
}
