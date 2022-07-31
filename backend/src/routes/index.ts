import { Application, NextFunction, Request, Response } from "express";
import workoutRoutes from "./workout";

const constructorMethod = (app: Application) => {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ status: "OK" });
  });

  app.use("/workout", workoutRoutes);

  app.use("*", (req: Request, res: Response) => {
    res.status(404).json({ error: "Not found" });
  });
};

export = constructorMethod;
