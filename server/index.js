const express = require("express");
const app = express();
const db = require("../db/index.js");
const morgan = require("morgan");
const port = 5500;
const bodyParser = require("body-parser");
const router = require("./routes.js");
var cors = require("cors");
app.use(cors());

app.use(express.static("./client/dist"));

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Cows app listening on port ${port}!`));
