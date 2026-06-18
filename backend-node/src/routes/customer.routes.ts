import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";

const customerRoutes = Router();
const customerController = new CustomerController();

customerRoutes.get("/clientes", (req, res) => {
  return customerController.listar(req, res);
});

customerRoutes.get("/cliente/:id", (req,res)=>{
  return customerController.buscarPorId(req,res);
})

customerRoutes.post("/clientes", (req, res) => {
  return customerController.criar(req, res);
});

customerRoutes.put("/clientes/:id", (req, res) => {
  return customerController.atualizar(req, res);
});

customerRoutes.delete("/clientes/:id", (req, res) => {
  return customerController.deletar(req, res);
});

export default customerRoutes;