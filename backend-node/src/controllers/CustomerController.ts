import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

export class CustomerController {
  private customerService = new CustomerService();

  listar(req: Request, res: Response) {
    return res.json(this.customerService.listarClientes());
  }

  buscarPorId(req: Request, res: Response){
    const id = String(req.params.id);

    const cliente = this.customerService.buscarClientePorId(id);

    if(!cliente){
      return res.status(404).json({mensagem: "Cliente não encontrado"});
    }

    return res.json(cliente);
  }

  criar(req: Request, res: Response) {
    const cliente = this.customerService.criarCliente(req.body);

    return res.status(201).json(cliente);
  }

  atualizar(req: Request, res: Response){
    const id = String(req.params.id);

    const cliente = this.customerService.autualizarCliente(id, req.body);

    if(!cliente){
      return res.status(404).json({mensagem: "Cliente não encontrado"});
    }

    return res.json(cliente);
  }

  deletar(req: Request, res: Response){
    const id = String(req.params.id);

    const cliente = this.customerService.deletarCliente(id);

    if(!cliente){
      return res.status(404).json({mensagem: "Cliente não encontrado"});
    }

    return res.status(204).send();
  }
}