import { Router } from "express";
import { HealthController } from "../controllers/HealthController";

const healthRoutes = Router();
const healthController = new HealthController();

healthRoutes.get("/health", (req, res) => {
  return healthController.check(req, res);
});

export default healthRoutes;