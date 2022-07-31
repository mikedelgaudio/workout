import { Request, Response, Router } from "express";
const router: Router = Router();
// const data = require('../data');
// const restaurantsData = data.restaurants;

router.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ hello: "Helo" });
  } catch (e: unknown) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export = router;
