const workoutRoutes = require("./workout");

const constructorMethod = (app) => {
  app.use("/workout", workoutRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
