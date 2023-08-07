import VMasker from "vanilla-masker";

export function AddCpfMask (value: string) {
  const pattern = "999.999.999-99";
  return VMasker.toPattern(value, pattern);
};

export function RemoveCpfMask (value: string) {
  return value.replace(CpfReplaceRegex, "");
};

export const CpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;

export const CpfReplaceRegex = /[.-]/g;
