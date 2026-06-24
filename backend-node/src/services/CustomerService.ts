import { Cliente, clientes } from "../data/clientes";
import { CustomerRepository } from "../repositories/CustomerRepository";

export class CustomerService {
  
  private customerRepository = new CustomerRepository();
  
  listarClientes() {
    return clientes;
  }

  buscarClientePorId(id: string){
    
    return this.customerRepository.buscarPorId(id);
  }

  criarCliente(dados: Omit<Cliente, "id">) {
    const cliente: Cliente = {
      id: crypto.randomUUID(),
      ...dados,
    };

    this.customerRepository.criar(cliente)

    return cliente;
  }

  atualizarCliente(id: string, dados: Omit<Cliente, "id">){
    const clienteAtualizado: Cliente = {
      id,
      ...dados,
    };

    return this.customerRepository.atualizar(id, clienteAtualizado);
  }

  deletarCliente(id: string){
    return this.customerRepository.deletar(id);
  }
}