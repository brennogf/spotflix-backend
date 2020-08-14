const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
require("dotenv/config");

const app = express();

mongoose.connect(process.env.SECRET_BD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const corsOptions = {
  origin: process.env.SECRET_ORIGIN,
  optionsSuccessStatus: 200,
};
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3001);
