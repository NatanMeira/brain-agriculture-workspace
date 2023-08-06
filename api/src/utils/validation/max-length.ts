import { MaxLength as _MaxLength, ValidationOptions } from 'class-validator';

export const MaxLength = (
  max: number,
  validationOptions?: ValidationOptions,
): PropertyDecorator =>
  _MaxLength(max, {
    ...validationOptions,
    message: '$property não deve ser maior que $constraint1 caracteres',
  });
