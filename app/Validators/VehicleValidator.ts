import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class VehicleValidator {
  public schema = schema.create({
    plate: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'vehicles', column: 'plate' }),
    ]),
    brand: schema.string({}, [
      rules.required(),
    ]),
    type_vehicle: schema.string({}, [
      rules.required(),
    ]),
    load_capacity: schema.number([
      rules.required(),
      rules.unsigned(),
    ]),
    latitude: schema.number.optional([
      rules.range(-90, 90), 
    ]),
    longitude: schema.number.optional([
      rules.range(-180, 180),
    ]),
  })

  public messages = {
    'plate.required': 'La placa es obligatoria.',
    'plate.unique': 'La placa ya está registrada.',
    'brand.required': 'La marca es obligatoria.',
    'type_vehicle.required': 'El tipo de vehículo es obligatorio.',
    'load_capacity.required': 'La capacidad de carga es obligatoria.',
    'load_capacity.unsigned': 'La capacidad de carga debe ser un número positivo.',
    'latitude.range': 'La latitud debe estar entre -90 y 90.',
    'longitude.range': 'La longitud debe estar entre -180 y 180.',
  }
}
