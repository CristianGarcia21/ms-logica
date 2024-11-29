import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('product_categories').insert([

      { product_id: 1, category_id: 1 },
      { product_id: 2, category_id: 2 },
      { product_id: 3, category_id: 3 },
      { product_id: 4, category_id: 1 },
      { product_id: 5, category_id: 2 },
      { product_id: 6, category_id: 3 },
      { product_id: 7, category_id: 1 },
      { product_id: 8, category_id: 4 },
      { product_id: 9, category_id: 2 },
      { product_id: 10, category_id: 4 }
    ])
  }
}
