import { Response } from "express";

export function respostaSucesso<T>(
    res: Response,
    statusCode: number,
    mensagem: string,
    dados?: T
){
    return res.status(statusCode).json({
        mensagem,
        dados,
    });
}