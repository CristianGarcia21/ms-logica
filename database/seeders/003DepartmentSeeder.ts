import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('departments').insert([
      { name: 'Amazonas' },
      { name: 'Antioquia' },
      { name: 'Arauca' },
      { name: 'Atlántico' },
      { name: 'Bolívar' },
      { name: 'Boyacá' },
      { name: 'Caldas' },
      { name: 'Caquetá' },
      { name: 'Casanare' },
      { name: 'Cauca' },
      { name: 'Cesar' },
      { name: 'Chocó' },
      { name: 'Córdoba' },
      { name: 'Cundinamarca' },
      { name: 'Guainía' },
      { name: 'Guaviare' },
      { name: 'Huila' },
      { name: 'La Guajira' },
      { name: 'Magdalena' },
      { name: 'Meta' },
      { name: 'Nariño' },
      { name: 'Norte de Santander' },
      { name: 'Putumayo' },
      { name: 'Quindío' },
      { name: 'Risaralda' },
      { name: 'San Andrés y Providencia' },
      { name: 'Santander' },
      { name: 'Sucre' },
      { name: 'Tolima' },
      { name: 'Valle del Cauca' },
      { name: 'Vaupés' },
      { name: 'Vichada' },
    ])
  }
}
