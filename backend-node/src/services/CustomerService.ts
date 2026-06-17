import { Cliente, clientes } from "../data/clientes";

export class CustomerService {
  listarClientes() {
    return clientes;
  }

  criarCliente(dados: Omit<Cliente, "id">) {
    const cliente: Cliente = {
      id: crypto.randomUUID(),
      ...dados,
    };

    clientes.push(cliente);

    return cliente;
  }
}