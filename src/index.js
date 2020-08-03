const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : "",
});

const app = express();

mongoose.connect(
  process.env.SECRET_TEST ? process.env.SECRET_TEST : process.env.S3_SECRET,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const corsOptions = {
  origin: "http://spotflix.tk/",
  optionsSuccessStatus: 200,
};
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3001);
