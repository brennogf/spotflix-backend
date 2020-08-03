const { Router } = require("express");
const Categoria = require("./controllers/Categoria");
const Filme = require("./controllers/Filme");

const routes = Router();

routes.get("/categorias", Categoria.index);
routes.post("/categorias", Categoria.store);
routes.delete("/categorias/:id", Categoria.destroy);
routes.put("/categorias/:id", Categoria.update);

routes.get("/filmes", Filme.index);
routes.get("/filmes/:categoria", Filme.show);
routes.post("/filmes", Filme.store);
routes.delete("/filmes/:id", Filme.destroy);

module.exports = routes;
