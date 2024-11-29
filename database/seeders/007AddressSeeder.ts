import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('addresses').insert([
      // Amazonas (municipality_id 1)
      { street: 'Calle 1', number: 101, neighborhood: 'Centro', department: 'Amazonas', municipality_id: '1' },

      // Antioquia (municipality_id 2)
      { street: 'Carrera 50', number: 202, neighborhood: 'El Poblado', department: 'Antioquia', municipality_id: '2' },
      { street: 'Calle 10', number: 301, neighborhood: 'Envigado', department: 'Antioquia', municipality_id: '3' },

      // Arauca (municipality_id 3)
      { street: 'Calle 8', number: 120, neighborhood: 'Centro', department: 'Arauca', municipality_id: '4' },

      // Atlántico (municipality_id 4)
      { street: 'Avenida 50', number: 405, neighborhood: 'Bajo', department: 'Atlántico', municipality_id: '5' },
      { street: 'Calle 20', number: 506, neighborhood: 'Soledad', department: 'Atlántico', municipality_id: '6' },

      // Bolívar (municipality_id 5)
      { street: 'Carrera 4', number: 150, neighborhood: 'Centro Histórico', department: 'Bolívar', municipality_id: '7' },
      { street: 'Avenida 8', number: 250, neighborhood: 'El Bosque', department: 'Bolívar', municipality_id: '8' },

      // Boyacá (municipality_id 6)
      { street: 'Calle 7', number: 202, neighborhood: 'Catedral', department: 'Boyacá', municipality_id: '9' },
      { street: 'Carrera 12', number: 305, neighborhood: 'Villa de Leyva', department: 'Boyacá', municipality_id: '10' },

      // Caldas (municipality_id 7)
      { street: 'Avenida 12', number: 450, neighborhood: 'La Estación', department: 'Caldas', municipality_id: '11' },
      { street: 'Calle 9', number: 322, neighborhood: 'Villamaría', department: 'Caldas', municipality_id: '12' },

      // Caquetá (municipality_id 8)
      { street: 'Carrera 7', number: 110, neighborhood: 'El Tesoro', department: 'Caquetá', municipality_id: '13' },

      // Casanare (municipality_id 9)
      { street: 'Calle 4', number: 160, neighborhood: 'Centro', department: 'Casanare', municipality_id: '14' },

      // Cauca (municipality_id 10)
      { street: 'Calle 13', number: 210, neighborhood: 'La Loma', department: 'Cauca', municipality_id: '15' },

      // Cesar (municipality_id 11)
      { street: 'Avenida 10', number: 330, neighborhood: 'La Nevada', department: 'Cesar', municipality_id: '16' },

      // Chocó (municipality_id 12)
      { street: 'Carrera 2', number: 120, neighborhood: 'Centro', department: 'Chocó', municipality_id: '17' },

      // Córdoba (municipality_id 13)
      { street: 'Calle 15', number: 202, neighborhood: 'Centro', department: 'Córdoba', municipality_id: '18' },

      // Cundinamarca (municipality_id 14)
      { street: 'Calle 6', number: 50, neighborhood: 'El Chicó', department: 'Cundinamarca', municipality_id: '19' },
      { street: 'Carrera 12', number: 30, neighborhood: 'Soacha', department: 'Cundinamarca', municipality_id: '20' },

      // Guainía (municipality_id 15)
      { street: 'Calle 8', number: 80, neighborhood: 'Barrio Nuevo', department: 'Guainía', municipality_id: '21' },

      // Guaviare (municipality_id 16)
      { street: 'Avenida 10', number: 120, neighborhood: 'Guaviare', department: 'Guaviare', municipality_id: '22' },

      // Huila (municipality_id 17)
      { street: 'Carrera 6', number: 100, neighborhood: 'La Universidad', department: 'Huila', municipality_id: '23' },

      // La Guajira (municipality_id 18)
      { street: 'Calle 15', number: 230, neighborhood: 'Riohacha', department: 'La Guajira', municipality_id: '24' },

      // Magdalena (municipality_id 19)
      { street: 'Carrera 7', number: 130, neighborhood: 'El Prado', department: 'Magdalena', municipality_id: '25' },

      // Meta (municipality_id 20)
      { street: 'Avenida 12', number: 400, neighborhood: 'La Sabana', department: 'Meta', municipality_id: '26' },

      // Nariño (municipality_id 21)
      { street: 'Calle 7', number: 50, neighborhood: 'El Palmar', department: 'Nariño', municipality_id: '27' },

      // Norte de Santander (municipality_id 22)
      { street: 'Carrera 6', number: 80, neighborhood: 'Centro', department: 'Norte de Santander', municipality_id: '28' },

      // Putumayo (municipality_id 23)
      { street: 'Calle 3', number: 140, neighborhood: 'Putumayo', department: 'Putumayo', municipality_id: '29' },

      // Quindío (municipality_id 24)
      { street: 'Avenida 7', number: 210, neighborhood: 'Armenia', department: 'Quindío', municipality_id: '30' },

      // Risaralda (municipality_id 25)
      { street: 'Carrera 8', number: 210, neighborhood: 'Centro', department: 'Risaralda', municipality_id: '31' },

      // San Andrés y Providencia (municipality_id 26)
      { street: 'Calle 3', number: 50, neighborhood: 'San Andrés', department: 'San Andrés y Providencia', municipality_id: '32' },

      // Santander (municipality_id 27)
      { street: 'Avenida 5', number: 60, neighborhood: 'Bucaramanga', department: 'Santander', municipality_id: '33' },

      // Sucre (municipality_id 28)
      { street: 'Calle 1', number: 190, neighborhood: 'Sincelejo', department: 'Sucre', municipality_id: '34' },

      // Tolima (municipality_id 29)
      { street: 'Carrera 5', number: 90, neighborhood: 'Ibagué', department: 'Tolima', municipality_id: '35' },

      // Valle del Cauca (municipality_id 30)
      { street: 'Avenida 9', number: 210, neighborhood: 'Cali', department: 'Valle del Cauca', municipality_id: '36' },

      // Vaupés (municipality_id 31)
      { street: 'Calle 9', number: 60, neighborhood: 'Mitú', department: 'Vaupés', municipality_id: '37' },

      // Vichada (municipality_id 32)
      { street: 'Calle 2', number: 150, neighborhood: 'Puerto Carreño', department: 'Vichada', municipality_id: '38' },
    ])
  }
}
