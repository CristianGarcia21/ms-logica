import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('distribution_centers').insert([
      { address_id: 1, municipality_id: 1, name: 'Centro Amazonas' },  // Amazonas
      { address_id: 2, municipality_id: 2, name: 'Centro Medellín' },  // Antioquia - Medellín
      { address_id: 3, municipality_id: 3, name: 'Centro Envigado' },  // Antioquia - Envigado
      { address_id: 4, municipality_id: 4, name: 'Centro Arauca' },    // Arauca
      { address_id: 5, municipality_id: 5, name: 'Centro Barranquilla' }, // Atlántico - Barranquilla
      { address_id: 6, municipality_id: 6, name: 'Centro Soledad' },  // Atlántico - Soledad
      { address_id: 7, municipality_id: 7, name: 'Centro Cartagena' }, // Bolívar - Cartagena
      { address_id: 8, municipality_id: 8, name: 'Centro Magangué' }, // Bolívar - Magangué
      { address_id: 9, municipality_id: 9, name: 'Centro Tunja' },    // Boyacá - Tunja
      { address_id: 10, municipality_id: 10, name: 'Centro Duitama' }, // Boyacá - Duitama
      { address_id: 11, municipality_id: 11, name: 'Centro Manizales' }, // Caldas - Manizales
      { address_id: 12, municipality_id: 12, name: 'Centro Villamaría' }, // Caldas - Villamaría
      { address_id: 13, municipality_id: 13, name: 'Centro Florencia' }, // Caquetá
      { address_id: 14, municipality_id: 14, name: 'Centro Yopal' },    // Casanare
      { address_id: 15, municipality_id: 15, name: 'Centro Popayán' }, // Cauca
      { address_id: 16, municipality_id: 16, name: 'Centro Valledupar' }, // Cesar
      { address_id: 17, municipality_id: 17, name: 'Centro Quibdó' }, // Chocó
      { address_id: 18, municipality_id: 18, name: 'Centro Montería' }, // Córdoba
      { address_id: 19, municipality_id: 19, name: 'Centro Bogotá' },  // Cundinamarca - Bogotá
      { address_id: 20, municipality_id: 20, name: 'Centro Soacha' },  // Cundinamarca - Soacha
      { address_id: 21, municipality_id: 21, name: 'Centro Inírida' }, // Guainía
      { address_id: 22, municipality_id: 22, name: 'Centro San José del Guaviare' }, // Guaviare
      { address_id: 23, municipality_id: 23, name: 'Centro Neiva' },    // Huila
      { address_id: 24, municipality_id: 24, name: 'Centro Riohacha' }, // La Guajira
      { address_id: 25, municipality_id: 25, name: 'Centro Santa Marta' }, // Magdalena
      { address_id: 26, municipality_id: 26, name: 'Centro Villavicencio' }, // Meta
      { address_id: 27, municipality_id: 27, name: 'Centro Pasto' },    // Nariño
      { address_id: 28, municipality_id: 28, name: 'Centro Cúcuta' },  // Norte de Santander
      { address_id: 29, municipality_id: 29, name: 'Centro Mocoa' },    // Putumayo
      { address_id: 30, municipality_id: 30, name: 'Centro Armenia' }, // Quindío
      { address_id: 31, municipality_id: 31, name: 'Centro Pereira' }, // Risaralda
      { address_id: 32, municipality_id: 32, name: 'Centro San Andrés' }, // San Andrés y Providencia
      { address_id: 33, municipality_id: 33, name: 'Centro Bucaramanga' }, // Santander
      { address_id: 34, municipality_id: 34, name: 'Centro Sincelejo' }, // Sucre
      { address_id: 35, municipality_id: 35, name: 'Centro Ibagué' },   // Tolima
      { address_id: 36, municipality_id: 36, name: 'Centro Cali' },     // Valle del Cauca
      { address_id: 37, municipality_id: 37, name: 'Centro Mitú' },     // Vaupés
      { address_id: 38, municipality_id: 38, name: 'Centro Puerto Carreño' }, // Vichada
    ])
  }
}
