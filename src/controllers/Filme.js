const Filme = require("../models/Filme");
const Categoria = require("../models/Categoria");

module.exports = {
  async store(req, res) {
    try {
      const { categoriaName, titulo, url } = req.body;

      const filmes = await Filme.create({
        categoriaName,
        titulo,
        url,
      });

      res.json(filmes);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async index(req, res) {
    try {
      const categorias = await Categoria.find();
      const filmes = await Filme.find();
      const finalResponse = [];

      categorias.map((categoria) => {
        finalResponse.push({
          _id: categoria._id,
          name: categoria.name,
          filmes: [],
        });
      });

      finalResponse.map((atualFinal) => {
        filmes.map((atualFilme) => {
          if (atualFilme.categoriaName === atualFinal.name) {
            atualFinal.filmes.push({
              _id: atualFilme._id,
              titulo: atualFilme.titulo,
              url: atualFilme.url,
            });
          }
        });
      });

      res.json(finalResponse);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async show(req, res) {
    try {
      const categorias = await Categoria.find({
        name: req.params.categoria,
      });
      const filmes = await Filme.find();
      const finalResponse = [];

      categorias.map((categoria) => {
        finalResponse.push({
          name: categoria.name,
          filmes: [],
        });
      });

      finalResponse.map((atualFinal) => {
        filmes.map((atualFilme) => {
          if (atualFilme.categoriaName === atualFinal.name) {
            atualFinal.filmes.push({
              titulo: atualFilme.titulo,
              url: atualFilme.url,
            });
          }
        });
      });

      res.json(finalResponse);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async destroy(req, res) {
    try {
      await Filme.findByIdAndDelete(req.params.id);

      return res.json({ success: true });
    } catch (err) {
      return res.json({ error: true });
    }
  },
};
