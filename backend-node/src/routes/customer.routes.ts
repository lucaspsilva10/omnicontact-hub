import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";

const customerRoutes = Router();
const customerController = new CustomerController();

customerRoutes.get("/clientes", (req, res) => {
  return customerController.listar(req, res);
});

customerRoutes.post("/clientes", (req, res) => {
  return customerController.criar(req, res);
});

export default customerRoutes;