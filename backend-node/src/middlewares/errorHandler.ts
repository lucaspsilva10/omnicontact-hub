import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      mensagem: "Erro de validação",
      erros: error.issues.map((issue) => ({
        campo: issue.path.join("."),
        mensagem: issue.message,
      })),
    });
  }

  return res.status(500).json({
    mensagem: "Erro interno do servidor",
  });
}