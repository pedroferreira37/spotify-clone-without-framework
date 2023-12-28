const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");

const app = express();

app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("<b>hello world</b>");
});

const server = app.listen(3000, () =>
  console.log("example app running at http://localhost:%s", 3000)
);
