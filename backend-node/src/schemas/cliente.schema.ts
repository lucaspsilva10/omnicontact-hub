import { z } from "zod";

export const criarClienteSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 caracteres"),
});

export const atualizarClienteSchema = criarClienteSchema;