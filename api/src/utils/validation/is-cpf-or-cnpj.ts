import { generateValidatorDecorator, validateCnpj, validateCpf } from './';

export const IsCPFOrCNPJ = generateValidatorDecorator(
  validateCpfOrCnpj,
  'IsCPFOrCNPJ',
  'O valor informado ($value) para o campo $property precisa ser um' +
    'CPF ou CNPJ válido (Ex: 55555555555 | 55555555000100)',
);

export function validateCpfOrCnpj(value: string) {
  return validateCnpj(value) || validateCpf(value);
}
