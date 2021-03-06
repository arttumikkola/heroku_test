const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

const db = [{ name: "tiina" }, { name: "jack" }];
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

app.get("/names", (req, res) => {
  res.send(db);
});
