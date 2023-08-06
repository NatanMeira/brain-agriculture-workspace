import { generateValidatorDecorator } from './';

export const IsBrazilianState = generateValidatorDecorator(
  validateBrazilianState,
  'IsBrazilianState',
  'O valor informado ($value) para o campo $property precisa ser um' +
    'estado brasileiro válido (Ex: SP, RJ, MG e etc)',
);

export function validateBrazilianState(state) {
  const states = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO',
  ];
  if (!states.includes(state)) {
    return false;
  }
  return true;
}
