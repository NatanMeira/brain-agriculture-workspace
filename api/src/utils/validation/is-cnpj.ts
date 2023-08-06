import { generateValidatorDecorator } from '.';

export const IsCNPJ = generateValidatorDecorator(
  validateCnpj,
  'IsCNPJ',
  'O valor informado ($value) para o campo $property precisa ser um CNPJ válido (Ex: 55555555000100)',
);

export function validateCnpj(cnpj: string) {
  cnpj = cleanCnpj(cnpj);
  if (!isValidLength(cnpj)) return false;

  const match = cnpj.toString().match(/\d/g);
  const numbers = Array.isArray(match) ? match.map(Number) : [];

  if (numbers.length !== 14) return false;

  const items = [...new Set(numbers)];
  if (items.length === 1) return false;

  const digits = numbers.slice(12);
  const digit0 = calculateCheckDigit(12, numbers);
  if (digit0 !== digits[0]) return false;

  const digit1 = calculateCheckDigit(13, numbers);
  return digit1 === digits[1];
}

const cleanCnpj = function (cnpj: string) {
  return cnpj.replace(/[\.\-\/]/g, '');
};

const isValidLength = function (cnpj: string) {
  return cnpj.length === 14;
};

const calculateCheckDigit = function (x: number, numbers: number[]) {
  const slice = numbers.slice(0, x);
  let factor = x - 7;
  let sum = 0;
  for (let i = x; i >= 1; i--) {
    const n = slice[x - i];
    sum += n * factor--;
    if (factor < 2) factor = 9;
  }
  const result = 11 - (sum % 11);
  return result > 9 ? 0 : result;
};
