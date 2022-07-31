import cors, { CorsOptions } from "cors";
import * as dotenv from "dotenv";
import express, { Application } from "express";
import configRoutes from "./routes";

dotenv.config();
const app: Application = express();

const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());

// const configRoutes = require("./routes");
// const connection = require("./config/mongoConnection");
configRoutes(app);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  try {
    console.log(`Server is running on http://localhost:${PORT}`);
    // (async () => {
    //   const db = await connection.connectToDb();
    //   await db.dropDatabase();
    // })();
  } catch (e) {
    console.log(`Error running server on port ${PORT}`);
  }
});
