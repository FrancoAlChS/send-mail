"use client";
import { z } from "zod";

export const driverSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre debe tener mínimo 1 caracter"),
  email: z
    .string({ required_error: "El correo es requerido" })
    .email("Se tiene que ingresar un correo válido"),
  state: z.enum(["ACTIVO", "INACTIVO"], {
    message: "El estado solo puede ser Activo o Inactivo",
  }),
});
