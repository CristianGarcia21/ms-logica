import Database from "@ioc:Adonis/Lucid/Database";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

export default class extends BaseSeeder {
  public async run() {
    await Database.table("administrators").insert([
      {
        name: "Administrador Cristian",
        status: true,
        email: "cristian.1701921077@ucaldas.edu.co",
        password: null,
        user_id: 2,
      },
    ]);
  }
}
