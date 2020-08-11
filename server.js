const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const product = require("./controllers/products")(app);

app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.listen(3000, () => {
  console.log(`magic happen in http://localhost:3000`);
});
