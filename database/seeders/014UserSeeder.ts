import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('users').insert([
      { userId: '6714235e6b06307806f8185a', username: 'Cristian Garcia ', email: 'cristiangarcianastar21@gmail.com', password: 'null' },
      { userId: '67142f5d7aeeec268c869e2c', username: 'Cristian Garcia U ', email: 'cristian.1701921077@ucaldas.edu.co', password: 'null' },
      { userId: '6718f981354a9219132a79e5', username: 'carloslopez', email: 'felipe.buitrago@ucaldas.edu.co', password: 'null' },
      { userId: '6713122a69dd293559916648', username: 'luciaortega', email: 'lucia.ortega@example.com', password: 'null' },
      { userId: '67048e96663daa65d1e001e1', username: 'pedromartinez', email: 'pedro.martinez@example.com', password: 'null' }
    ])
  }
}
