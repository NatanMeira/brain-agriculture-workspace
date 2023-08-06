import { IsEnum as _IsEnum, ValidationOptions } from 'class-validator';

export const IsEnum = (entity: any, validationOptions?: ValidationOptions) =>
  _IsEnum(entity, {
    ...validationOptions,
    message: `$property deve ser um dos seguintes valores: ${Object.keys(
      entity,
    ).join(', ')}`,
  });
