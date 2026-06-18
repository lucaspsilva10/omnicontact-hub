import { Cliente, clientes } from "../data/clientes";

export class CustomerService {
  listarClientes() {
    return clientes;
  }

  buscarClientePorId(id: string){
    return clientes.find((cliente) => cliente.id === id);
  }

  criarCliente(dados: Omit<Cliente, "id">) {
    const cliente: Cliente = {
      id: crypto.randomUUID(),
      ...dados,
    };

    clientes.push(cliente);

    return cliente;
  }

  atualizarCliente(id: string, dados: Omit<Cliente, "id">){
    const clienteIndex = clientes.findIndex((cliente) => cliente.id ===id);
    
    if (clienteIndex === -1){
      return null;
    }

    clientes[clienteIndex] = {
      id,
      ...dados,
    };

    return clientes[clienteIndex];
  }

  deletarCliente(id: string){
    const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);

    if(clienteIndex === -1){
      return null;
    }

    clientes.splice(clienteIndex, 1);

    return true;
  }
}