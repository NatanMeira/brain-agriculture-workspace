import 'yup'
import { BaseSchema } from 'yup'
import { AnyObject, Maybe } from 'yup/es/types'

declare module 'yup' {
  export interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends BaseSchema<TType, TContext, TOut> {
    cpfOrCnpj(message?: string): StringSchema<string>
  }
}
