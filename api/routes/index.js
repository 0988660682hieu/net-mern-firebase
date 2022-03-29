const authRoute = require("./auth.routes");
const userRoute = require("./user.routes");
const movieRoute = require("./movie.routes");
const listRoute = require("./list.routes");

function route(app) {
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/movie", movieRoute);
  app.use("/list", listRoute);
}

module.exports = route;
