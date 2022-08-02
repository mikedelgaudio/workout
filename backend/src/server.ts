import cors, { CorsOptions } from "cors";
import * as dotenv from "dotenv";
import express, { Application } from "express";
import { connectToDb } from "./config/mongoConnection";
import { database } from "./data";
import configRoutes from "./routes";

dotenv.config();
const app: Application = express();

const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());

configRoutes(app);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  try {
    console.log(`Server is running on http://localhost:${PORT}`);

    if (process.env.PRODUCTION === "false") {
      (async () => {
        const db = await connectToDb();
        await db?.dropDatabase();
        const id = await database.workout.create("Hi");
        console.log(id);
      })().catch((e) => console.error(e));
    }
  } catch (e) {
    console.log(`Error running server on port ${PORT}`);
  }
});

// process.on("SIGINT", async () => {
//   console.log("Closing database connection.\n");
//   await closeConnection();
// });
