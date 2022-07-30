const express = require("express");
const app = express();
const configRoutes = require("./routes");
// const connection = require("./config/mongoConnection");
app.use(express.json());
configRoutes(app);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  try {
    console.log(`Server is running on http://localhost:${PORT}`);
    // (async () => {
    //   const db = await connection.connectToDb();
    //   await db.dropDatabase();
    // })();
  } catch (e) {}
  console.log(`Error running server on port ${PORT}`);
});
