"use strict";

module.exports = app => {
  const controller = require("../controller/controller");
  app
    .route("/movies")
    .get(controller.movies)
    .post(controller.add);

  app
    .route("/movies/:movieId")
    .get(controller.getMovie)
    .put(controller.update)
    .delete(controller.delete);
};
