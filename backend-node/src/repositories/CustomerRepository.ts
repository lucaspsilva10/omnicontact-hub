
import { Cliente, clientes } from "../data/clientes";

export class CustomerRepository {
  listar() {
    return clientes;
  }

  buscarPorId(id: string) {
    return clientes.find((cliente) => cliente.id === id);
  }

  criar(cliente: Cliente) {
    clientes.push(cliente);

    return cliente;
  }

  atualizar(id: string, clienteAtualizado: Cliente) {
    const index = clientes.findIndex(
      (cliente) => cliente.id === id
    );

    if (index === -1) {
      return null;
    }

    clientes[index] = clienteAtualizado;

    return clientes[index];
  }

  deletar(id: string) {
    const index = clientes.findIndex(
      (cliente) => cliente.id === id
    );

    if (index === -1) {
      return false;
    }

    clientes.splice(index, 1);

    return true;
  }
}