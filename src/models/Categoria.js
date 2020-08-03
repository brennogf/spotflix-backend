const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
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

module.exports = mongoose.model("Categoria", CategoriaSchema);
