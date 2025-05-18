import { object, string } from "yup";
import type { InferType } from "yup";

export const validateLoginSchema = object({
  type: string().required("El tipo de documento es requerido"),
  document: string()
    .required("El número de documento es requerido")
    .matches(/^[0-9]+$/, "El número de documento solo puede contener números")
    .min(7, "El número de documento debe tener al menos 7 dígitos")
    .max(8, "El número de documento no puede tener más de 8 dígitos"),
  mobile: string()
    .required("El número de celular es requerido")
    .matches(/^[0-9]+$/, "El número de celular solo puede contener números")
    .min(9, "El número de celular debe tener al menos 9 dígitos")
    .max(10, "El número de celular no puede tener más de 10 dígitos"),
  privacy: string().required("Debes aceptar la política de privacidad"),
  comunication: string().required(
    "Debes aceptar la política de comunicaciones comerciales"
  ),
});

export type LoginSchemaType = InferType<typeof validateLoginSchema>;
