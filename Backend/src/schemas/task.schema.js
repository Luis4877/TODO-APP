import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: " Titulo requerido",
  }),
  description: z.string({
    required_error: "La descripcion es requerida",
  }),
  date: z.string().datetime().optional(),
});

export const updateTaskSchema = z.object({
  title: z.string({
    required_error: " Titulo requerido",
  }),
  description: z.string({
    required_error: "La descripcion es requerida",
  }),
});
