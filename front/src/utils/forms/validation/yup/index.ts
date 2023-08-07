import * as yup from 'yup'

import {
  validateCnpj,
  validateCpf,
} from '@/utils/forms/validation/functions'

yup.setLocale({
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório',
    oneOf: ({ values }) => `Deve ser um dos seguintes valores: ${values}`,
    notOneOf: ({ values }) => `Não pode ser um dos seguintes valores: ${values}`
  },
  string: {
    length: ({ length }) => `Deve ter exatamente ${length} caracteres`,
    min: ({ min }) => `Deve ter no mínimo ${min} caracteres`,
    max: ({ max }) => `Deve ter no máximo ${max} caracteres`,
    matches: 'Não atende o formato esperado',
    email: 'Deve ser um endereço de e-mail válido',
    url: 'Deve ser uma URL válida',
    trim: 'Não deve ter espaços em branco no início ou no final',
    lowercase: 'Deve estar em minúsculas',
    uppercase: 'Deve estar em maiúsculas'
  },
  number: {
    min: ({ min }) => `Deve ser maior ou igual a ${min}`,
    max: ({ max }) => `Deve ser menor ou igual a ${max}`,
    lessThan: ({ less }) => `Deve ser menor que ${less}`,
    moreThan: ({ more }) => `Deve ser maior que ${more}`,
    positive: 'Deve ser um número positivo',
    negative: 'Deve ser um número negativo',
    integer: 'Deve ser um número inteiro'
  }
})

yup.addMethod(yup.StringSchema, 'cpfOrCnpj', function () {
  return this.test('cpfOrCnpj', 'CPF ou CNPJ inválido', function (this, value) {
    if (!value) return true
    if (value.length === 14) {
      return validateCpf(value)
    } else if (value.length === 18) {
      return validateCnpj(value)
    }
    return false
  })
})

export default yup
