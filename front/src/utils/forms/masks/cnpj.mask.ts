import VMasker from "vanilla-masker";

export function AddCnpjMask  (value: string)  {
  const pattern = "99.999.999/9999-99";
  return VMasker.toPattern(value, pattern);
};

export function RemoveCnpjMask (value: string) {
  return value.replace(CnpjReplaceRegex, "");
};

export const CnpjRegex = /[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/g;

export const CnpjReplaceRegex = /[./-]/g;
