import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContractValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    start_date: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss',
    }),
    end_date: schema.date({
      format: 'yyyy-MM-dd HH:mm:ss',
    })
  
  })

  public messages: CustomMessages = {}
}
