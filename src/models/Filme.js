const mongoose = require("mongoose");

const FilmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    unique: true,
    require: true,
  },
  url: {
    type: String,
    unique: true,
    require: true,
  },
  categoriaName: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Filme", FilmeSchema);
