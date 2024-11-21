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
  })

  public messages = {
    'plate.required': 'La placa es obligatoria.',
    'plate.unique': 'La placa ya está registrada.',
    'brand.required': 'La marca es obligatoria.',
    'type_vehicle.required': 'El tipo de vehículo es obligatorio.',
    'load_capacity.required': 'La capacidad de carga es obligatoria.',
    'load_capacity.unsigned': 'La capacidad de carga debe ser un número positivo.',
  }
}
