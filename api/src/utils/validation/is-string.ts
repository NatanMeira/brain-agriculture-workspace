import { IsString as _IsString, ValidationOptions } from 'class-validator';

export const IsString = (validationOptions?: ValidationOptions) =>
  _IsString({
    ...validationOptions,
    message:
      'O valor informado ($value) para o campo $property precisa ser uma string',
  });
