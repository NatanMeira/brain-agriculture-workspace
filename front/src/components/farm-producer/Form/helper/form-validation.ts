import yup from "@/utils/forms/validation/yup";

export const CreateFormProducerValidation = yup.object().shape({
  name: yup.string().required(),
  cpfOrCnpj: yup.string().cpfOrCnpj().required(),
  farmName: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  arableAreaInHectares: yup.number().required(),
  vegetationAreaInHectares: yup.number().required(),
  totalAreaInHectares: yup.number().required(),
  plantedCrops: yup.array().of(yup.string().required()).required(),
});
