import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('insurances').insert([
      { vehicle_id: 1, insurance_company: 'Seguros de Colombia', policy_number: 'S12345', start_date: '2024-01-01', end_date: '2024-12-31', amount: 150000, status: true },
      { vehicle_id: 2, insurance_company: 'La Previsora', policy_number: 'P67890', start_date: '2024-02-01', end_date: '2024-12-31', amount: 120000, status: true },
      { vehicle_id: 3, insurance_company: 'Colpatria', policy_number: 'C11223', start_date: '2024-03-01', end_date: '2024-12-31', amount: 180000, status: true },
      { vehicle_id: 4, insurance_company: 'Mapfre', policy_number: 'M33445', start_date: '2024-04-01', end_date: '2024-12-31', amount: 200000, status: false },
      { vehicle_id: 5, insurance_company: 'Sura', policy_number: 'S55667', start_date: '2024-05-01', end_date: '2024-12-31', amount: 160000, status: true },
      { vehicle_id: 6, insurance_company: 'AXA', policy_number: 'A77889', start_date: '2024-06-01', end_date: '2024-12-31', amount: 140000, status: true },
      { vehicle_id: 7, insurance_company: 'Liberty Seguros', policy_number: 'L99000', start_date: '2024-07-01', end_date: '2024-12-31', amount: 170000, status: true },
      { vehicle_id: 8, insurance_company: 'Seguros de Vida', policy_number: 'V22334', start_date: '2024-08-01', end_date: '2024-12-31', amount: 130000, status: false },
      { vehicle_id: 9, insurance_company: 'Generali', policy_number: 'G44556', start_date: '2024-09-01', end_date: '2024-12-31', amount: 190000, status: true },
      { vehicle_id: 10, insurance_company: 'Bolivar', policy_number: 'B66778', start_date: '2024-10-01', end_date: '2024-12-31', amount: 150000, status: true }
    ])
  }
}
