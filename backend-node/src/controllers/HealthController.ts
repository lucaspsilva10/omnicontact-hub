import { Request, Response } from "express";

export class HealthController {
  public check(req: Request, res: Response) {
    return res.json({
      status: "ok",
      message: "OmniContact Hub API is running",
    });
  }
}