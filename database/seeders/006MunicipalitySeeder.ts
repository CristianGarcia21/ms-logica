import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('municipalities').insert([
      // Amazonas (department_id 1)
      { name: 'Leticia', department_id: 1 },

      // Antioquia (department_id 2)
      { name: 'Medellín', department_id: 2 },
      { name: 'Envigado', department_id: 2 },

      // Arauca (department_id 3)
      { name: 'Arauca', department_id: 3 },

      // Atlántico (department_id 4)
      { name: 'Barranquilla', department_id: 4 },
      { name: 'Soledad', department_id: 4 },

      // Bolívar (department_id 5)
      { name: 'Cartagena', department_id: 5 },
      { name: 'Magangué', department_id: 5 },

      // Boyacá (department_id 6)
      { name: 'Tunja', department_id: 6 },
      { name: 'Duitama', department_id: 6 },

      // Caldas (department_id 7)
      { name: 'Manizales', department_id: 7 },
      { name: 'Villamaría', department_id: 7 },

      // Caquetá (department_id 8)
      { name: 'Florencia', department_id: 8 },

      // Casanare (department_id 9)
      { name: 'Yopal', department_id: 9 },

      // Cauca (department_id 10)
      { name: 'Popayán', department_id: 10 },

      // Cesar (department_id 11)
      { name: 'Valledupar', department_id: 11 },

      // Chocó (department_id 12)
      { name: 'Quibdó', department_id: 12 },

      // Córdoba (department_id 13)
      { name: 'Montería', department_id: 13 },

      // Cundinamarca (department_id 14)
      { name: 'Bogotá', department_id: 14 },
      { name: 'Soacha', department_id: 14 },

      // Guainía (department_id 15)
      { name: 'Inírida', department_id: 15 },

      // Guaviare (department_id 16)
      { name: 'San José del Guaviare', department_id: 16 },

      // Huila (department_id 17)
      { name: 'Neiva', department_id: 17 },

      // La Guajira (department_id 18)
      { name: 'Riohacha', department_id: 18 },

      // Magdalena (department_id 19)
      { name: 'Santa Marta', department_id: 19 },

      // Meta (department_id 20)
      { name: 'Villavicencio', department_id: 20 },

      // Nariño (department_id 21)
      { name: 'Pasto', department_id: 21 },

      // Norte de Santander (department_id 22)
      { name: 'Cúcuta', department_id: 22 },

      // Putumayo (department_id 23)
      { name: 'Mocoa', department_id: 23 },

      // Quindío (department_id 24)
      { name: 'Armenia', department_id: 24 },

      // Risaralda (department_id 25)
      { name: 'Pereira', department_id: 25 },

      // San Andrés y Providencia (department_id 26)
      { name: 'San Andrés', department_id: 26 },

      // Santander (department_id 27)
      { name: 'Bucaramanga', department_id: 27 },

      // Sucre (department_id 28)
      { name: 'Sincelejo', department_id: 28 },

      // Tolima (department_id 29)
      { name: 'Ibagué', department_id: 29 },

      // Valle del Cauca (department_id 30)
      { name: 'Cali', department_id: 30 },

      // Vaupés (department_id 31)
      { name: 'Mitú', department_id: 31 },

      // Vichada (department_id 32)
      { name: 'Puerto Carreño', department_id: 32 },
    ])
  }
}
