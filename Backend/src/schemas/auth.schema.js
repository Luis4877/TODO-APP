import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Nombre de usuario requerido.",
  }),
  email: z
    .string({
      required_error: "Correo requerido",
    })
    .email({
      required_error: "Correo requerido",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(8, {
      message: "La contraseña debe ser de almenos 8 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Correo Requerido",
    })
    .email({
      message: "Correo Invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(8, {
      message: "La contraseña debe ser de al menos 8 caracteres",
    }),
});
