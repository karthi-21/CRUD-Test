const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  movie: { type: String, required: "Movie name is must..." },
  actor: { type: String, required: "Actor name is also must..." },
});

module.exports = mongoose.model("Movie", movieSchema);
