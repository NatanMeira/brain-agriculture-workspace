import {
  IsNumber as _IsNumber,
  ValidationOptions,
  IsNumberOptions,
} from 'class-validator';

export const IsNumber = (
  options?: IsNumberOptions,
  validationOptions?: ValidationOptions,
) =>
  _IsNumber(options, {
    ...validationOptions,
    message:
      'O valor informado ($value) para o campo $property precisa ser um número',
  });
