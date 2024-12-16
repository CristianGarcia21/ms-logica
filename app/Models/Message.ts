import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Chat from './Chat';
import User from './User';

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public content: string;

  @column()
  public chatId: number; // Asegúrate de que este atributo exista y esté correctamente definido

  @belongsTo(() => Chat, { foreignKey: 'chatId' })
  public chat: BelongsTo<typeof Chat>;

  @column()
  public userId: number;

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
