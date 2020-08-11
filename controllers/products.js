const _ = require("lodash");

const product = (app) => {
  let _product = [];
  //CREATE
  app.post("/api/product", (req, res) => {
    _product.push(req.body);
    res.json({ info: "product created!" });
  });
  //READ
  app.get("/api/product", (req, res) => {
    res.send(_product);
  });
  //UPDATE
  app.put("/api/product/:id", (req, res) => {
    const index = _.findIndex(_product, {
      id: parseInt(req.params.id),
    });
    _.merge(_product[index], req.body);
    res.json({ info: "product updated!" });
  });
  //DELETE
  app.delete("/api/product/:id", (req, res) => {
    _.remove(_product, (product) => {
      return product.id === parseInt(req.params.id);
    });
    res.json({ info: "product removed!" });
  });
};

module.exports = product;
