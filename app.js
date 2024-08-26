const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes/indexRoute");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
