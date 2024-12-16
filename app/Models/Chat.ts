import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import User from './User';
import Message from './Message';

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public user1Id: number;

  @belongsTo(() => User, { foreignKey: 'user1Id' })
  public user1: BelongsTo<typeof User>;

  @column()
  public user2Id: number;

  @belongsTo(() => User, { foreignKey: 'user2Id' })
  public user2: BelongsTo<typeof User>;

  @hasMany(() => Message, { foreignKey: 'chatId' }) 
  public messages: HasMany<typeof Message>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
