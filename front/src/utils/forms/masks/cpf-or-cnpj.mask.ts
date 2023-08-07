import { AddCnpjMask, RemoveCnpjMask, RemoveCpfMask, AddCpfMask } from './';

export function AddCpfOrCnpjMask(value: string) {
  if (value.length <= 14) {
    return AddCpfMask(value);
  }
  return AddCnpjMask(value);
}

export function RemoveCpfOrCnpjMask(value: string) {
  if (value.length <= 14) {
    return RemoveCpfMask(value);
  }
  return RemoveCnpjMask(value);
}
