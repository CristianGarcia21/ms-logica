import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Chats extends BaseSchema {
  protected tableName = 'chats';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'); // ID autoincremental
      table.integer('user1_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE'); // Creador del chat
      table.integer('user2_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE'); // Usuario destinatario
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
