import * as z from "zod";

export const ProductFormSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres"),
  price: z.number().min(0, "El precio debe ser mayor o igual a 0"),
  /* image: z.object({
    imageUrl: z.string(),
    imageName: z.string(),
  }), */
});