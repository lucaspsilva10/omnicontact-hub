import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

export class CustomerController {
  private customerService = new CustomerService();

  listar(req: Request, res: Response) {
    return res.json(this.customerService.listarClientes());
  }

  criar(req: Request, res: Response) {
    const cliente = this.customerService.criarCliente(req.body);

    return res.status(201).json(cliente);
  }
}