const express = require("express");
const userSchema = require("../models/productos");

const router = express.Router();

// get all productos
router.get("/products", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// mostrar un producto por categoria: hombre o mujer
router.get("/products/categoria/:categoria", (req, res) => {
  userSchema
  .find({categoria: req.params.categoria})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// mostrar un producto por tipo blusa mujer
router.get("/products/tipo/blusa", async (req, res) => {
  try {
    const ropa = await userSchema.find({ $and: [{tipo: "blusa"}, {categoria: "mujer"}]})
    res.status(200).json(ropa)
  } catch (error) {
    res.status(500).json({message: "Ocurrio un error"})
  }
});

// mostrar pantalones mujer
router.get("/products/tipo/pantalonM", async (req, res) => {
  try {
    const ropa = await userSchema.find({ $and: [{tipo: "pantalon"}, {categoria: "mujer"}]})
    res.status(200).json(ropa)
  } catch (error) {
    res.status(500).json({message: "Ocurrio un error"})
  }
});

// mostrar agrigo mujer
router.get("/products/tipo/agrigoM", async (req, res) => {
  try {
    const ropa = await userSchema.find({ $and: [{tipo: "abrigo"}, {categoria: "mujer"}]})
    res.status(200).json(ropa)
  } catch (error) {
    res.status(500).json({message: "Ocurrio un error"})
  }
});

// mostrar un producto por tipo playera hombre
router.get("/products/tipo/playera", async (req, res) => {
  try {
    const ropa = await userSchema.find({ $and: [{tipo: "playera"}, {categoria: "hombre"}]})
    res.status(200).json(ropa)
  } catch (error) {
    res.status(500).json({message: "Ocurrio un error"})
  }
});

// mostrar pantalones hombre
router.get("/products/tipo/pantalonH", async (req, res) => {
  try {
    const ropa = await userSchema.find({ $and: [{tipo: "pantalon"}, {categoria: "hombre"}]})
    res.status(200).json(ropa)
  } catch (error) {
    res.status(500).json({message: "Ocurrio un error"})
  }
});

// mostrar agrigo hombre
router.get("/products/tipo/agrigoH", async (req, res) => {
  try {
    const ropa = await userSchema.find({ $and: [{tipo: "abrigo"}, {categoria: "hombre"}]})
    res.status(200).json(ropa)
  } catch (error) {
    res.status(500).json({message: "Ocurrio un error"})
  }
});

module.exports = router;

/*
// create productos
router.post("/products", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
*/

/*
// update a productos
router.put("/products/stock/:id", (req, res) => {
  const { id } = req.params;
  const {Stock} = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: {Stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
*/